/* ===================================================================
 * Sky Background - Starfield (night) / Clouds & Sun (day)
 *
 * Renders an animated canvas background that changes based on
 * the current data-theme attribute (dark = stars, light = clouds).
 * ------------------------------------------------------------------- */

(function() {
  function initSky() {
    var canvas = document.querySelector('.sky-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var width, height, stars, placedConstellations, clouds, animId;

    function isLightTheme() {
      return document.documentElement.getAttribute('data-theme') === 'light';
    }

    /* --- Constellation data --- */
    var CONSTELLATIONS = [
      {
        name: 'orion',
        stars: [[0.25,0],[0.75,0.05],[0.4,0.45],[0.5,0.47],[0.6,0.45],[0.2,0.95],[0.8,0.9]],
        lines: [[0,2],[1,4],[2,3],[3,4],[2,5],[4,6]]
      },
      {
        name: 'bigDipper',
        stars: [[0,0],[0.15,0.28],[0.48,0.3],[0.42,0.05],[0.62,0],[0.8,0.1],[1,0.22]],
        lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]]
      },
      {
        name: 'cassiopeia',
        stars: [[0,0.5],[0.25,0],[0.5,0.4],[0.75,0],[1,0.5]],
        lines: [[0,1],[1,2],[2,3],[3,4]]
      },
      {
        name: 'cygnus',
        stars: [[0.5,0],[0.5,0.4],[0.5,1],[0,0.45],[1,0.45]],
        lines: [[0,1],[1,2],[3,1],[1,4]]
      },
      {
        name: 'leo',
        stars: [[0,0.65],[0.1,0.35],[0.22,0.08],[0.38,0],[0.42,0.18],[0.48,0.38],[1,0.32]],
        lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[5,6]]
      }
    ];

    /* --- Cloud templates --- */
    var CLOUD_TEMPLATES = [
      { bumps: [{cx:-0.85,cy:-0.1,r:0.35},{cx:-0.4,cy:-0.35,r:0.4},{cx:0.1,cy:-0.5,r:0.45},{cx:0.55,cy:-0.3,r:0.38},{cx:0.9,cy:-0.1,r:0.3}] },
      { bumps: [{cx:-1,cy:-0.08,r:0.3},{cx:-0.55,cy:-0.2,r:0.35},{cx:-0.05,cy:-0.28,r:0.35},{cx:0.45,cy:-0.22,r:0.33},{cx:0.9,cy:-0.1,r:0.28},{cx:1.2,cy:-0.05,r:0.22}] },
      { bumps: [{cx:-0.7,cy:-0.15,r:0.35},{cx:-0.2,cy:-0.45,r:0.4},{cx:0.2,cy:-0.6,r:0.38},{cx:0.6,cy:-0.3,r:0.35},{cx:0.85,cy:-0.1,r:0.28}] },
      { bumps: [{cx:-0.5,cy:-0.1,r:0.32},{cx:0,cy:-0.35,r:0.4},{cx:0.45,cy:-0.12,r:0.3}] }
    ];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      var dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createStars() {
      var area = width * height;
      var bgCount = Math.min(200, Math.max(80, Math.floor(area / 8000)));
      stars = [];
      placedConstellations = [];

      for (var i = 0; i < bgCount; i++) {
        var isBright = Math.random() < 0.08;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: isBright ? Math.random() * 1.2 + 1.5 : Math.random() * 0.8 + 0.3,
          baseAlpha: isBright ? Math.random() * 0.3 + 0.7 : Math.random() * 0.4 + 0.2,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.0008 + 0.0003,
          bright: isBright
        });
      }

      var shuffled = CONSTELLATIONS.slice().sort(function() { return Math.random() - 0.5; });
      var count = width < 600 ? 2 : width < 1200 ? 3 : 4;
      var picks = shuffled.slice(0, count);
      var regions = [];

      for (var p = 0; p < picks.length; p++) {
        var data = picks[p];
        var scale = Math.max(80, width * (0.08 + Math.random() * 0.06));
        var padding = 50;
        var ox, oy, valid, attempts = 0;

        do {
          ox = padding + Math.random() * (width - scale - padding * 2);
          oy = padding + Math.random() * (height - scale - padding * 2);
          valid = regions.every(function(r) {
            var dx = ox - r.x, dy = oy - r.y;
            return Math.sqrt(dx * dx + dy * dy) > scale + r.scale + 80;
          });
          attempts++;
        } while (!valid && attempts < 30);

        if (!valid) continue;
        regions.push({ x: ox, y: oy, scale: scale });

        var angle = (Math.random() - 0.5) * 0.4;
        var cos = Math.cos(angle), sin = Math.sin(angle);

        var cStars = data.stars.map(function(pos) {
          var rx = cos * (pos[0] - 0.5) - sin * (pos[1] - 0.5) + 0.5;
          var ry = sin * (pos[0] - 0.5) + cos * (pos[1] - 0.5) + 0.5;
          var star = {
            x: ox + rx * scale, y: oy + ry * scale,
            r: Math.random() * 0.5 + 1.3,
            baseAlpha: Math.random() * 0.15 + 0.7,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.0008 + 0.0003,
            bright: true
          };
          stars.push(star);
          return star;
        });

        placedConstellations.push({ stars: cStars, lines: data.lines });
      }
    }

    function createClouds() {
      var count = width < 600 ? 8 : width < 1200 ? 12 : 16;
      clouds = [];

      for (var i = 0; i < count; i++) {
        var scale = Math.random() * 60 + 70;
        var template = CLOUD_TEMPLATES[Math.floor(Math.random() * CLOUD_TEMPLATES.length)];
        var bumps = template.bumps.map(function(b) {
          return {
            cx: (b.cx + (Math.random() - 0.5) * 0.06) * scale,
            cy: (b.cy + (Math.random() - 0.5) * 0.04) * scale,
            r:  (b.r  + (Math.random() - 0.5) * 0.04) * scale
          };
        });

        clouds.push({
          x: Math.random() * (width + 400) - 200,
          y: Math.random() * height * 0.5 + height * 0.03,
          scale: scale, bumps: bumps,
          baseAlpha: Math.random() * 0.1 + 0.25,
          driftX: Math.random() * 0.12 + 0.04,
          phase: Math.random() * Math.PI * 2,
          bobSpeed: Math.random() * 0.0003 + 0.0001
        });
      }
    }

    /* --- Drawing functions --- */

    function drawStars(time) {
      ctx.clearRect(0, 0, width, height);

      for (var c = 0; c < placedConstellations.length; c++) {
        var con = placedConstellations[c];
        for (var l = 0; l < con.lines.length; l++) {
          var pair = con.lines[l];
          var s1 = con.stars[pair[0]], s2 = con.stars[pair[1]];
          var t1 = 0.6 + 0.4 * Math.sin(time * s1.speed + s1.phase);
          var t2 = 0.6 + 0.4 * Math.sin(time * s2.speed + s2.phase);
          var alpha = Math.min(s1.baseAlpha * t1, s2.baseAlpha * t2) * 0.25;
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.strokeStyle = 'rgba(200,220,255,' + alpha + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var twinkle = 0.6 + 0.4 * Math.sin(time * s.speed + s.phase);
        var alpha = s.baseAlpha * twinkle;
        if (s.bright) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r + 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(200,220,255,' + (alpha * 0.15) + ')';
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
        ctx.fill();
      }
    }

    function getSunPosition() {
      var now = new Date();
      var hours = now.getHours() + now.getMinutes() / 60;
      var t = (hours - 6) / 13;
      t = Math.max(0, Math.min(1, t));
      var x = 0.1 + t * 0.8;
      var minY = 0.08, maxY = 0.35;
      var y = 4 * (maxY - minY) * (t - 0.5) * (t - 0.5) + minY;
      return { x: x, y: y };
    }

    function drawSkyGradient() {
      var grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0,    'rgba(120, 180, 230, 0.5)');
      grad.addColorStop(0.25, 'rgba(140, 200, 240, 0.35)');
      grad.addColorStop(0.5,  'rgba(165, 215, 245, 0.22)');
      grad.addColorStop(0.75, 'rgba(190, 225, 248, 0.12)');
      grad.addColorStop(0.92, 'rgba(210, 235, 250, 0.05)');
      grad.addColorStop(1,    'rgba(230, 242, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function drawSun() {
      var pos = getSunPosition();
      var sx = width * pos.x, sy = height * pos.y;
      var r = Math.min(width, height) * 0.05;

      var halo = ctx.createRadialGradient(sx, sy, r * 0.5, sx, sy, r * 6);
      halo.addColorStop(0, 'rgba(255, 220, 100, 0.12)');
      halo.addColorStop(0.5, 'rgba(255, 200, 60, 0.05)');
      halo.addColorStop(1, 'rgba(255, 200, 60, 0)');
      ctx.beginPath(); ctx.arc(sx, sy, r * 6, 0, Math.PI * 2);
      ctx.fillStyle = halo; ctx.fill();

      var glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 2);
      glow.addColorStop(0, 'rgba(255, 230, 140, 0.28)');
      glow.addColorStop(0.6, 'rgba(255, 210, 80, 0.12)');
      glow.addColorStop(1, 'rgba(255, 200, 60, 0)');
      ctx.beginPath(); ctx.arc(sx, sy, r * 2, 0, Math.PI * 2);
      ctx.fillStyle = glow; ctx.fill();

      var core = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
      core.addColorStop(0, 'rgba(255, 235, 160, 0.5)');
      core.addColorStop(0.7, 'rgba(255, 220, 100, 0.3)');
      core.addColorStop(1, 'rgba(255, 210, 80, 0)');
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fillStyle = core; ctx.fill();
    }

    function drawCloudShape(cx, cy, bumps, alpha) {
      if (bumps.length === 0) return;
      ctx.beginPath();
      var left = Infinity, right = -Infinity;
      for (var i = 0; i < bumps.length; i++) {
        var b = bumps[i];
        if (b.cx - b.r < left) left = b.cx - b.r;
        if (b.cx + b.r > right) right = b.cx + b.r;
      }
      ctx.moveTo(cx + right, cy);
      ctx.lineTo(cx + left, cy);
      for (var i = 0; i < bumps.length; i++) {
        var b = bumps[i];
        ctx.arc(cx + b.cx, cy + b.cy, b.r, Math.PI, 0, false);
      }
      ctx.closePath();
      ctx.save();
      ctx.shadowColor = 'rgba(100, 140, 180, ' + (alpha * 0.4) + ')';
      ctx.shadowBlur = 18;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 6;
      ctx.fillStyle = 'rgba(200, 220, 240, ' + alpha + ')';
      ctx.fill();
      ctx.restore();
    }

    function drawClouds(time) {
      ctx.clearRect(0, 0, width, height);
      drawSkyGradient();
      drawSun();
      for (var i = 0; i < clouds.length; i++) {
        var cloud = clouds[i];
        cloud.x += cloud.driftX;
        var extent = cloud.scale * 1.5;
        if (cloud.x - extent > width + 200) cloud.x = -extent - 200;
        var bob = Math.sin(time * cloud.bobSpeed + cloud.phase) * 3;
        drawCloudShape(cloud.x, cloud.y + bob, cloud.bumps, cloud.baseAlpha);
      }
    }

    function step(time) {
      if (isLightTheme()) {
        drawClouds(time);
      } else {
        drawStars(time);
      }
      animId = requestAnimationFrame(step);
    }

    function init() {
      resize();
      createStars();
      createClouds();
      if (reducedMotion) {
        if (isLightTheme()) drawClouds(0);
        else drawStars(0);
      } else {
        step(0);
      }
    }

    init();

    window.addEventListener('resize', function() {
      resize();
      createStars();
      createClouds();
      if (reducedMotion) {
        if (isLightTheme()) drawClouds(0);
        else drawStars(0);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSky);
  } else {
    initSky();
  }
})();
