from django.contrib import admin

# Register your models here.
from main.models import Customer
# Register your models here.


class CustomerAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('name',)}
    list_display = ('name','slug',)


admin.site.register(Customer, CustomerAdmin)