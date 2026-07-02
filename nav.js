/* ────────────────────────────────────────────────────────────────
   Menú unificado del dashboard EEH · CPL 2027
   Fuente ÚNICA de la navegación: editar SOLO este array.
   - El orden define la numeración (01, 02, …) automáticamente.
   - Cada página incluye:  <nav class="site-nav" id="site-nav"></nav>
     y, antes de </body>:   <script src="nav.js"></script>
   Para agregar una página nueva: añade una línea a PAGES en su lugar.
   ──────────────────────────────────────────────────────────────── */
(function () {
  var PAGES = [
    { file: 'funneles_ciclos.html',   label: 'Funneles' },
    { file: 'cpl_etapas.html',        label: 'CPL Etapas' },
    { file: 'canal_rentabilidad.html',label: 'CPL Plataformas' },
    { file: 'leads_perdidos.html',    label: 'Leads Perdidos' },
    { file: 'comparativo.html',       label: 'Comparativo' }
  ];

  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var html =
    '<a href="index.html" class="nav-brand" title="Portada">' +
      '<img src="elisia-logo.webp" class="nav-logo" alt="EEH · Elisia Education Hub">' +
    '</a>' +
    '<div class="nav-sep"></div>' +
    '<div class="nav-divider"></div>';

  PAGES.forEach(function (p, i) {
    var num = ('0' + (i + 1)).slice(-2);
    var active = (here === p.file.toLowerCase()) ? ' active' : '';
    html += '<a href="' + p.file + '" class="nav-link' + active + '">' +
              num + ' · ' + p.label +
            '</a>';
  });

  nav.className = 'site-nav';
  nav.innerHTML = html;
})();
