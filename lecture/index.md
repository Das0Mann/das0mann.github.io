---
layout: page
title: Lectures
excerpt: "Interactive lectures on electronic structure, spin physics and quantum chemistry."
permalink: /lecture/
hide_hero: true
---

<div class="lecture-library lecture-library--iconic">
  <header class="library-landing">
    <div class="library-landing-copy">
      <p class="section-eyebrow">Interactive learning</p>
      <h1>From electrons to spin chemistry.</h1>
      <p>Explore the physical ideas behind quantum chemistry, magnetic resonance and molecular spin dynamics. Each module combines derivations, interactive models and questions that test understanding.</p>
      <div class="library-landing-actions">
        <a class="button-dark" href="{{ site.url }}/lecture/electronic-structure/">
          {% include icon.html name="play" %} Start learning
        </a>
        <a class="button-light" href="#modules">
          {% include icon.html name="book" %} Explore modules
        </a>
      </div>
      <p class="library-landing-note">13 modules · Graduate-level theory · Open access</p>
    </div>
    <div class="library-landing-graphic" aria-hidden="true">
      <div class="library-graphic-icon">{% include icon.html name="spin" %}</div>
      <div class="library-graphic-steps">
        <span><b>01</b> Electronic states</span>
        <i></i>
        <span><b>02</b> Spin dynamics</span>
        <i></i>
        <span><b>03</b> Observable signals</span>
      </div>
    </div>
  </header>

  <section class="library-section library-module-catalogue" id="modules" aria-labelledby="module-catalogue-title">
    <div class="library-section-intro">
      <div>
        <p class="section-eyebrow">Course catalogue</p>
        <h2 id="module-catalogue-title">Explore the modules</h2>
        <p>The modules are arranged in a suggested learning order. Their original module numbers remain unchanged for citation and bookmarking.</p>
      </div>
      <div class="library-filter-field" role="search">
        <label for="lecture-module-search">{% include icon.html name="search" %} Search topics</label>
        <input id="lecture-module-search" type="search" placeholder="Try hyperfine, electron transfer or EPR" autocomplete="off">
        <output id="lecture-result-count" class="library-filter-counter" aria-live="polite">13 modules</output>
      </div>
    </div>

    <p id="lecture-search-empty" class="library-search-empty" hidden>No matching modules. Try a broader topic.</p>

    <div class="library-grid library-icon-grid">
      {% for module in site.data.lecture_route %}
      <a class="library-card library-icon-card" href="{{ site.url }}{{ module.url }}">
        <span class="library-card-top">
          <span class="library-card-symbol">{% include icon.html name=module.icon %}</span>
          <span class="library-card-number">Module {{ module.number }}</span>
        </span>
        <span class="library-card-theme">{{ module.theme }}</span>
        <h3>{{ module.name }}</h3>
        <p>{{ module.description }}</p>
        <span class="library-card-link">Open lecture {% include icon.html name="arrow-up-right" %}</span>
      </a>
      {% endfor %}
    </div>
  </section>
</div>
