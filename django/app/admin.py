from django.contrib import admin
from .models import Book, Inventory

class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'author', 'genre', 'edition_number', 'publish_date')
    list_filter = ('genre', 'publish_date','edition_number')
    search_fields = ('name', 'author')
    ordering = ('name', 'publish_date', 'edition_number')

class InventoryAdmin(admin.ModelAdmin):
    list_display = ('book', 'book_number', 'in_stock')
    list_filter = ('book__genre',)
    search_fields = ('book__name', 'book_number')
    ordering = ('book__name', 'book_number')

admin.site.register(Book, BookAdmin)
admin.site.register(Inventory, InventoryAdmin)