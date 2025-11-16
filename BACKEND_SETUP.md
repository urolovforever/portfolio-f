# Backend CORS Setup Instructions

## Muammo
Frontend `https://nizomjon.pythonanywhere.com` backend bilan bog'lanmayapti chunki CORS (Cross-Origin Resource Sharing) sozlanmagan.

## Yechim

### 1. PythonAnywhere Backend ni sozlash

#### A. Django CORS Headers o'rnatish

PythonAnywhere **Bash console** da:

```bash
pip install django-cors-headers
```

#### B. `settings.py` faylini yangilash

Django backend loyihangizda `settings.py` faylini oching va quyidagi o'zgarishlarni kiriting:

```python
# INSTALLED_APPS ga qo'shing
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third party apps
    'rest_framework',
    'corsheaders',  # <-- SHU QATORNI QO'SHING

    # Your apps
    'portfolio',
    # ...
]

# MIDDLEWARE ga qo'shing (ENG YUQORIGA!)
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # <-- SHU QATORNI ENG YUQORIGA QO'SHING
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS sozlamalari (faylning oxiriga qo'shing)
# Development uchun
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://127.0.0.1:3000",
]

# Agar frontend ham deploy qilgan bo'lsangiz, uning URL ini qo'shing:
# CORS_ALLOWED_ORIGINS = [
#     "https://your-frontend-domain.com",
# ]

# Yoki test uchun barchaga ruxsat berish (PRODUCTION DA ISHLATMANG!)
# CORS_ALLOW_ALL_ORIGINS = True

# CSRF sozlamalari (kerak bo'lsa)
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "https://nizomjon.pythonanywhere.com",
]
```

#### C. PythonAnywhere Web App ni reload qilish

1. PythonAnywhere **Web** sahifasiga o'ting
2. **Reload** tugmasini bosing (yashil tugma)

### 2. Frontend ni test qilish

Backend sozlamalarini o'zgartirgandan keyin, frontend ni qayta ishga tushiring:

```bash
npm start
```

### 3. Tekshirish

1. **Portfolio** bo'limida loyihalar ko'rinishini tekshiring
2. **Contact Form** ni to'ldirib, xabar yuboring
3. Browser console da (F12) xatolik borligini tekshiring

### Test qilish uchun curl:

```bash
# Projects API
curl https://nizomjon.pythonanywhere.com/projects/

# Profile API
curl https://nizomjon.pythonanywhere.com/profile/

# Contact API (POST)
curl -X POST https://nizomjon.pythonanywhere.com/contact/ \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@example.com", "message": "Test message"}'
```

### Agar muammo hal bo'lmasa:

1. Browser console da (F12) xatolarni tekshiring
2. PythonAnywhere **Error log** ni tekshiring
3. Backend da API endpoints to'g'ri sozlanganligini tekshiring:
   - `/projects/` - Loyihalar ro'yxati
   - `/profile/` - Profil ma'lumotlari
   - `/contact/` - Contact form (POST)

## Frontend O'zgarishlar

Ushbu fayllar yangilandi:

1. `src/utils/api.js` - CORS uchun `withCredentials: false` qo'shildi va `contactAPI` qo'shildi
2. `src/components/ContactForm.js` - Backend API chaqiruvi faollashtirildi

## Qo'shimcha

Agar frontend ni ham hosting ga deploy qilmoqchi bo'lsangiz (masalan Vercel, Netlify):

1. `.env` faylida `REACT_APP_API_URL=https://nizomjon.pythonanywhere.com` ekanligini tekshiring
2. Frontend deploy qilganingizda, backend `settings.py` da frontend URL ni `CORS_ALLOWED_ORIGINS` ga qo'shing
