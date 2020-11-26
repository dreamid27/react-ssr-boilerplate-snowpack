export default ({
  body, title, initialState, scripts, style, meta, link, htmlAttributes, linkTags,
}) => `
      <!DOCTYPE html>
      <html>
        <head>
          <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
          ${title}
          ${meta}
          ${link}
          ${linkTags}
          ${htmlAttributes}
          ${scripts}
          ${style}
        </head>
        <body>
          <div id="app">${body}</div>
        </body>
      </html>
    `;
