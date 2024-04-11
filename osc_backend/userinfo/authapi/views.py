from django.http import JsonResponse

def getRoutes(request):
    routes = [
        '/authapi/token',
        '/authapi/token/refresh',
    ]

    return JsonResponse(routes, safe=False)