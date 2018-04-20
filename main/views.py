from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import Customer
import json
# Create your views here.

host = 'http://localhost:8000/'

def main(request):
    return render(request, 'quickbooks/index.html')

@csrf_exempt
def end(request):

    if request.is_ajax():
        if request.method == 'POST':
            panicking = Customer.objects.filter(is_panicking = True)

            target = Customer.objects.get(name = 'inyang')

            target.lng = request.POST['lng']
            target.lat = request.POST['lat']
            target.address = request.POST['location']
            target.is_panicking = True          
            target.save()

    return HttpResponse(json.dumps({'success':'success'}))


def check(request):

    panicking = Customer.objects.filter(is_panicking = True)

    if panicking :
        target = Customer.objects.get(name = panicking[0].name)
        status = 1
        return HttpResponse(json.dumps({"status":status,"name":target.name,"surname":target.surname,
                            "location":target.address,"lat":target.lat, "lng" : target.lng, "link": host + "track"}))
    
    else:

        return HttpResponse(json.dumps({"status":"No panick activity"}))


def track(request):

    return render(request, 'quickbooks/tracking.html')

def test(request):

    return render(request, 'quickbooks/test.html')