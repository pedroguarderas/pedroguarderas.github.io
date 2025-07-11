```{=html}
<ul>
<% for (const item of items) { %>
  <li>
    <%= item.name %>,
    <%= item.url %> <br/>
    <%= item.description %>
  </li>
  <br/>
<% } %>
</ul>
```