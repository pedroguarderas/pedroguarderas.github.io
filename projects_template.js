```{=html}
<ul>
<% for (const item of items) { %>
  <li>
    <%= item.from %> - <%= item.until %>, 
    <%= item.title %>,
    <%= item.client %> <br/>
    <%= item.description %>
  </li>
  <br/>
<% } %>
</ul>
```