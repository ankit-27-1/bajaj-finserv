def default_get(path: str, url: str, name: str):
    @base_router.get(path=path, response_class=HTMLResponse)
    def function(request: Request):
        function.__name__ = name
        return settings.templates.TemplateResponse(
            url,
            context={
                "request": request,
            },
        )


default_get("/", "index.html", "homepage")

default_get("/register", "users/register.html", "register_get")
