from django.shortcuts import render
import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            # Check for empty fields
            if not username or not email or not password:
                return JsonResponse({"Error": "Please fill all details"}, status=400)

            # Check if user already exists
            if User.objects.filter(username=username).exists():
                return JsonResponse({"Exists": "Username already exists"}, status=400)

            # Create the user
            User.objects.create_user(username=username, email=email, password=password)

            # Send welcome email
            subject = "🎉 Welcome to Skilledge Academy!"
            message = f"""
Hi {username},

Welcome to Skilledge Academy! 🚀

We're excited to have you on board. Explore our platform, take interactive quizzes, earn certificates, and start your learning journey today!


If you have any questions, feel free to reach out.

Happy Learning! 📚  
- The Skilledge Team
"""
            send_mail(subject, message, settings.EMAIL_HOST_USER, [email], fail_silently=False)

            return JsonResponse({"Success": "Registered successfully and email sent!"}, status=200)

        except Exception as e:
            return JsonResponse({"Error": "Something went wrong", "details": str(e)}, status=500)

    else:
        return JsonResponse({"Error": "Invalid request method"}, status=405)

@csrf_exempt
def loginview(request):
    if request.method=='POST':
        try:
            data=json.loads(request.body)
            username=data.get('username')
            password=data.get('password')
            if not username or not password:
                return JsonResponse({"Error":"Fill details"})
            user=authenticate(request,username=username,password=password)
            if user is not None:
                login(request,user)
                return JsonResponse({"Sucsess":"Login Successful"},status=200)
            else:
                return JsonResponse({"Failed":"No user found"},status=400)
        except Exception as e:
            return JsonResponse({"Error":str(e)})
    else:
        return JsonResponse({"error":"Not post method"})