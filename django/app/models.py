from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=255, verbose_name='Book Name')
    author = models.CharField(max_length=255, verbose_name='Book Author')
    genre = models.CharField(max_length=100, verbose_name='Genre')
    edition_number = models.IntegerField(verbose_name='Edition Number')
    publish_date = models.DateField(verbose_name='Date of Publish')

    def __str__(self):
        return self.name

class Inventory(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, verbose_name='Book')
    book_number = models.CharField(max_length=20, unique=True, verbose_name='Book Number')
    in_stock = models.PositiveIntegerField(default=0, verbose_name='In Stock')

    def __str__(self):
        return f"{self.book.name} - {self.book_number}"
