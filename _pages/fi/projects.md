---
page_id: projects
layout: page
title: projektit
permalink: /projects/
description: Asioita, jotka olen suunnitellut, rakentanut ja julkaissut. Useimpia käytän itse joka päivä.
nav: true
nav_order: 3
display_categories: [productivity, uni, fun]
category_titles:
  productivity: Työkalut
  uni: Opinnot
  fun: Kokeilut
---

<div class="projects-index">
{% for category in page.display_categories %}
  {% assign in_category = site.projects | where: "category", category | sort: "year" | reverse %}
  {% if in_category.size > 0 %}
  <section class="index-section" id="{{ category }}">
    <header class="section-head">
      <h2>{{ page.category_titles[category] | default: category }}</h2>
      <span class="section-count">{{ in_category.size }}</span>
    </header>
    <ol class="project-index">
      {% for project in in_category %}
        {% include project_row.liquid project=project number=forloop.index %}
      {% endfor %}
    </ol>
  </section>
  {% endif %}
{% endfor %}
</div>
