# Backend CORS Setup Instructions

## Muammo
Frontend `https://nizomjon.pythonanywhere.com` backend bilan bog'lanmayapti chunki CORS faqat `nizomjonurolov.uz` domeniga ruxsat berib qo'yilgan.

## Yechim

### 1. PythonAnywhere Backend ni sozlash

✅ `django-cors-headers` allaqachon o'rnatilgan va sozlangan!

#### `settings.py` faylini yangilash kerak:

PythonAnywhere da Django backend loyihangizda `settings.py` faylini oching va quyidagi qismlarni yangilang:

**1. ALLOWED_HOSTS ni yangilang:**
```python
ALLOWED_HOSTS = [
    'nizomjonurolov.uz',
    'www.nizomjonurolov.uz',
    'nizomjon.pythonanywhere.com',  # ← SHU QATORNI QO'SHING
]
```

**2. CORS_ALLOWED_ORIGINS ni yangilang:**
```python
CORS_ALLOWED_ORIGINS = [
    # Production domains
    "https://nizomjonurolov.uz",
    "https://www.nizomjonurolov.uz",
    # Development ← SHU QATORLARNI QO'SHING
    "http://localhost:3000",
    "http://localhost:5000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5000",
]
```

**3. CSRF_TRUSTED_ORIGINS ni yangilang:**
```python
CSRF_TRUSTED_ORIGINS = [
    "https://nizomjonurolov.uz",
    "https://www.nizomjonurolov.uz",
    "https://nizomjon.pythonanywhere.com",  # ← SHU QATORNI QO'SHING
]
```

**YOKI TEST UCHUN** (faqat test paytida):
```python
# Barcha domenlardan so'rovga ruxsat berish (PRODUCTION DA ISHLATMANG!)
CORS_ALLOW_ALL_ORIGINS = True
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
