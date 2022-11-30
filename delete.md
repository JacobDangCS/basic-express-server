## Terminology
- Query Parameter: `/helloQuery?name=Jacob` => `req.query.name`
- Path (URL) Parameter: `/helloPath/Lucky`


```js
app.get('/helloPath/:individual', (req, res, next) => {
    let {individual} = req.pararms
})
