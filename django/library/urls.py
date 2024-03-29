from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path('', include('app.urls')),
    path('admin/', admin.site.urls),
]
handler404 = 'library.views.custom_page_not_found'
handler500 = 'library.views.custom_server_error'
