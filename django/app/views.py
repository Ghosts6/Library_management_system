from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Book

def home(request):
    return render(request, 'home.html')

@csrf_exempt
def add(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        author = request.POST.get('author')
        genre = request.POST.get('genre')
        edition_number = request.POST.get('edition_number')
        publish_date = request.POST.get('publish_date')

        try:
            new_book = Book(
                name=name,
                author=author,
                genre=genre,
                edition_number=edition_number,
                publish_date=publish_date
            )
            new_book.save()

            return JsonResponse({'success': True})
        except Exception as e:
            print('Error:', str(e))
            return JsonResponse({'success': False, 'error': 'Failed to save book'})

    return JsonResponse({'success': False, 'error': 'Invalid method'})

def add_book(request):
    return render(request, 'add.html')

def book_list(request):

    books = Book.objects.all()

    return render(request, 'book_list.html', {'books': books})

def search(request):
    return render(request, 'search.html')

def search_book(request):
    if request.method == 'GET':
        book_name = request.GET.get('name')

        try:
            book = Book.objects.get(name__iexact=book_name)
            return JsonResponse({'success': True, 'book': {
                'name': book.name,
                'author': book.author,
                'genre': book.genre,
                'edition_number': book.edition_number,
                'publish_date': book.publish_date,
            }})
        except Book.DoesNotExist:
            return JsonResponse({'success': False})

    return JsonResponse({'success': False})

