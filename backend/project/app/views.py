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

            if not username or not email or not password:
                return JsonResponse({"Error": "Fill all details"}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({"Exists": "User already exists"}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)

            # Send Welcome Email
            subject = "🎉 Welcome to Skilledge Academy!"
            message = f"""
Hi {username},

Welcome to Skilledge Academy! 🚀

We're excited to have you on board. Explore our platform, take interactive quizzes, earn certificates, and start your learning journey today!

You can Find My Project Here 👉 https://github.com/mohanChittiboina/Fullstack-project

If you have any questions, feel free to reach out.

Happy Learning! 📚
- The Skilledge Team
"""
            try:
                send_mail(subject, message, settings.EMAIL_HOST_USER, [email], fail_silently=False)
            except Exception as e:
                print(f"Email sending failed: {e}")

            return JsonResponse({"Success": "Registered successfully"}, status=200)

        except Exception as e:
            return JsonResponse({"error": f"Something went wrong: {str(e)}"}, status=500)

    return JsonResponse({"Error": "Use correct HTTP method"}, status=405)


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