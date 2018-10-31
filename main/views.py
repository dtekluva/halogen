from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import Customer, Location
import json
from itertools import chain #allow for merging multiple querysets frorm different models
from django.core import serializers
import math
import datetime
# from rest_framework import serializers
# Create your views here.

host = 'http://localhost:8000/'

def main(request):
    return render(request, 'quickbooks/index.html')
    
@csrf_exempt
def end(request):

    
    if request.method == 'POST':
        # try:
            post = json.loads(request.body)
            panicking = Customer.objects.filter(is_panicking = True)

            target = Customer.objects.get(name = 'inyang')

            distance_is_far = check_distance([target.lng, target.lat],[post['lng'], post['lat']] )

            target.lng = post['lng']
            target.lat = post['lat']
            target.address  = post['location']
            target.is_panicking = True if post['status'] == "panic" else False
            target.panicked = datetime.datetime.now()
            target.save()
            #create new location object with latest data sent if the distance is far enough
            if distance_is_far:

                new_location = Location.objects.create(lat = target.lat, lng = target.lng, address = target.address, customer_id = target.id)
                print("Saved")
            return HttpResponse(json.dumps({'success':'success', "panic_status":target.is_panicking}))
        
        # except:
        #     return HttpResponse('parameter inconsistency failure')
        
    return HttpResponse('Unrecognisable request method, cannot understand')


def check(request):

    panicking = Customer.objects.filter(is_panicking = True)
    locations = serializers.serialize("json", list(chain(Location.objects.all()[:40], panicking)) )

    if panicking :
        target = Customer.objects.get(name = panicking[0].name)
        status = target.is_panicking
        # return HttpResponse(json.dumps({"status":status,"name":target.name,"surname":target.surname,
        #                     "location":target.address,"lat":target.lat, "lng" : target.lng, "link": host + "track"}))
        return HttpResponse(locations)
    
    else:

        return HttpResponse(json.dumps([{"fields":{"status":"No panick activity", "action": "ok"}}]))


def track(request):

    return render(request, 'quickbooks/tracking.html')

def test(request):

    return render(request, 'quickbooks/test.html')

def check_distance(old_coord, new_coord):

    a =  old_coord[0] - new_coord[0] #lat difference as opposite
    b =  old_coord[1] - new_coord[1] #lng difference as adjacent
    c = a **2 + b **2 #hypothenus as distance between two points

    c = math.sqrt(c)
    print(c)

    if c >= 0.001:
        return True
    
    else:
        return False