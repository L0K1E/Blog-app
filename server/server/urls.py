from django.contrib import admin
from django.urls import path, include
from api import urls
from account import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('api.urls')),
    path('', include('account.urls')),
]
