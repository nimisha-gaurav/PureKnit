const globalProductsList = [
    { id: 1, name: "Merino Wool Blend Socks", name_hi: "मेरिनो ऊन ब्लेंड मोज़े", price: "₹1,250", img: "https://images.unsplash.com/photo-1582042732009-dd298516dcd8?auto=format&fit=crop&w=400&q=80", desc: "Premium merino wool blend ankle socks designed for all-day comfort and breathability. Highly durable and ultra-soft.", desc_hi: "प्रीमियम मेरिनो ऊन ब्लेंड टखने के मोज़े - पूरे दिन आराम और हवादार रहने के लिए डिज़ाइन किए गए। अत्यधिक टिकाऊ और बेहद रेशमी।" },
    { id: 2, name: "Opaque Winter Tights", name_hi: "सर्दियों की अपारदर्शी चड्डी", price: "₹1,850", img: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&w=400&q=80", desc: "Thick, warm opaque tights perfect for layering during cold winter months. Guaranteed not to tear.", desc_hi: "सर्दियों के महीनों के दौरान लेयरिंग के लिए परफेक्ट मोटी, गर्म अपारदर्शी चड्ढियां। न फटने की गारंटी।" },
    { id: 3, name: "Athletic Compression Shins", name_hi: "एथलेटिक संपीड़न पिंडली मोज़े", price: "₹1,400", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&q=80", desc: "Designed for rigorous workouts, these compression socks aid in recovery and active sport performance.", desc_hi: "कठोर कसरत के लिए डिज़ाइन किए गए, ये संपीड़न मोज़े खेल प्रदर्शन और रिकवरी में सहायता करते हैं।" },
    { id: 4, name: "Cashmere Sleep Socks", name_hi: "कश्मीरी नाइट मोज़े", price: "₹2,100", img: "https://images.unsplash.com/photo-1552554766-3d23da567a99?auto=format&fit=crop&w=400&q=80", desc: "Incredibly soft cashmere, providing ultimate luxury and warmth for lounging at home or bedtime.", desc_hi: "अविश्वसनीय रूप से नरम कश्मीरी, घर पर आराम करने या सोने के समय के लिए परम विलासिता और गर्माहट प्रदान करता है।" },
    { id: 5, name: "Sheer Pantyhose", name_hi: "पारदर्शी पेंटीहोज़", price: "₹950", img: "https://images.unsplash.com/photo-1596726242371-2e6b91ccf0f4?auto=format&fit=crop&w=400&q=80", desc: "Professional, elegant sheer pantyhose offering a smooth and comfortable stretch.", desc_hi: "पेशेवर, सुरुचिपूर्ण पारदर्शी पेंटीहोज़ जो सुचारू और आरामदायक स्ट्रेच प्रदान करते हैं।" },
    { id: 6, name: "Bamboo Crew Socks", name_hi: "बांस फाइबर मोज़े", price: "₹850", img: "https://images.unsplash.com/photo-1595175510619-ce2d1ee94fd1?auto=format&fit=crop&w=400&q=80", desc: "Eco-friendly bamboo crew socks that are naturally antimicrobial and odor-resistant.", desc_hi: "पर्यावरण के अनुकूल बांस क्रू मोज़े जो प्राकृतिक रूप से रोगाणुरोधी और गंध प्रतिरोधी हैं।" },
    { id: 7, name: "Thermal Leggings", name_hi: "थर्मल लेगिंग", price: "₹2,400", img: "https://images.unsplash.com/photo-1560942065-cc9f7a55edcd?auto=format&fit=crop&w=400&q=80", desc: "Heavyweight thermal leggings built to withstand extremely cold environments and snowy climates.", desc_hi: "बेहद ठंडे वातावरण और बर्फीली जलवायु का सामना करने के लिए बनाई गई हैवीवेट थर्मल लेगिंग।" },
    { id: 8, name: "Patterned Ankle Socks", name_hi: "पैटर्न वाले टखने के मोज़े", price: "₹650", img: "https://images.unsplash.com/photo-1515281488582-74cce99120de?auto=format&fit=crop&w=400&q=80", desc: "Fun, intricately patterned ankle socks perfect for showcasing a touch of distinct personality.", desc_hi: "विशिष्ट व्यक्तित्व का स्पर्श दिखाने के लिए बिल्कुल सही मज़ेदार, जटिल पैटर्न वाले टखने के मोज़े।" },
    { id: 9, name: "Running Over-Calf", name_hi: "दौड़ने वाले मोज़े", price: "₹1,350", img: "https://images.unsplash.com/photo-1563223010-8bde3301a216?auto=format&fit=crop&w=400&q=80", desc: "Securely fitting over-calf running socks specifically engineered to prevent blisters during marathons.", desc_hi: "सुरक्षित रूप से पैर पर फिट होने वाले रनिंग मोज़े विशेष रूप से मैराथन के दौरान छालों को रोकने के लिए तैयार किए गए हैं।" },
    { id: 10, name: "Luxury Alpaca Knit", name_hi: "लक्जरी अल्पाका मोज़े", price: "₹3,200", img: "https://images.unsplash.com/photo-1549488344-c11ed17bca88?auto=format&fit=crop&w=400&q=80", desc: "Hand-crafted alpaca knit hosiery providing warmth that surpasses standard wool with zero itchiness.", desc_hi: "हाथ से तैयार की गई अल्पाका निट होज़री जो बिना किसी खुजली के मानक ऊन से अधिक गर्मी प्रदान करती है।" },
    { id: 11, name: "Everyday Cotton Socks", name_hi: "दैनिक सूती मोज़े", price: "₹450", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=400&q=80", desc: "Reliable, breathable multi-pack cotton socks built for everyday casual wear.", desc_hi: "रोजमर्रा के आकस्मिक पहनने के लिए बनाए गए विश्वसनीय, सांस लेने योग्य सूती मोज़े।" },
    { id: 12, name: "Vintage Knee-Highs", name_hi: "विंटेज घुटने तक के मोज़े", price: "₹1,100", img: "https://images.unsplash.com/photo-1608228079968-c768ab1428b4?auto=format&fit=crop&w=400&q=80", desc: "Classic vintage-styled knee highs offering both striking fashion and robust comfort.", desc_hi: "क्लासिक विंटेज-शैली के घुटने तक मोज़े जो शानदार फैशन और मजबूत आराम दोनों प्रदान करते हैं।" },
    { id: 13, name: "Fleece-Lined Tights", name_hi: "ऊन वाली चड्डी", price: "₹2,600", img: "https://images.unsplash.com/photo-1584844053073-6238383c27ac?auto=format&fit=crop&w=400&q=80", desc: "Tights mimicking a sheer look on the outside, but fully lined with exceptionally warm inner fleece.", desc_hi: "बाहर से पारदर्शी लुक की नकल करने वाली लेकिन अंदर उत्कृष्ट ऊन वाली बेहद गर्म चड्डी।" },
    { id: 14, name: "Active Ankle Guards", name_hi: "एक्टिव एंकल गार्ड", price: "₹750", img: "https://images.unsplash.com/photo-1522778731333-6a56e5df1f6c?auto=format&fit=crop&w=400&q=80", desc: "Low-cut ankle guards with targeted heel and toe padding for high-impact sports.", desc_hi: "उच्च प्रभाव वाले खेलों के लिए एड़ी और पैर की उंगलियों की गद्दी वाले टखने के गार्ड।" },
    { id: 15, name: "Ribbed Lounge Socks", name_hi: "रिब्ड लाउंज मोज़े", price: "₹1,600", img: "https://images.unsplash.com/photo-1550995694-3e913a525f0e?auto=format&fit=crop&w=400&q=80", desc: "Chunky ribbed knitting perfect for slow weekends, reading by the fireplace, and relaxing indoors.", desc_hi: "चंकी रिब्ड बुनाई जो सप्ताहांत में आराम करने, चिमनी के पास पढ़ने और घर के अंदर रहने के लिए बिल्कुल सही है।" }
];

function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    let currentLang = localStorage.getItem('site_lang_pureknit') || 'en';
    const addToCartTxt = translations[currentLang].btn_add || "Add to Cart";
    
    container.innerHTML = '';
    globalProductsList.forEach(p => {
        let name = currentLang === 'hi' && p.name_hi ? p.name_hi : p.name;
        container.innerHTML += `
            <div class="product-card">
                <a href="product_details.html?id=${p.id}" class="img-link" title="Click to view details">
                    <img src="${p.img}" alt="${name}">
                </a>
                <div class="product-info">
                    <a href="product_details.html?id=${p.id}" style="text-decoration:none;"><h3>${name}</h3></a>
                    <div class="price">${p.price}</div>
                    <button class="btn btn-primary" onclick="addToCart(${p.id})">${addToCartTxt}</button>
                </div>
            </div>
        `;
    });
}

function renderProductDetails() {
    const detailsContainer = document.getElementById('single-product-details');
    if (!detailsContainer) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = globalProductsList.find(p => p.id === productId);
    
    let cl = localStorage.getItem('site_lang_pureknit') || 'en';
    const addToCartTxt = translations[cl].btn_add || "Add to Cart";
    const backBtnTxt = translations[cl].btn_back || "Back to Catalog";
    const inStockTxt = translations[cl].stock || "In Stock";
    
    if (product) {
        let name = cl === 'hi' && product.name_hi ? product.name_hi : product.name;
        let desc = cl === 'hi' && product.desc_hi ? product.desc_hi : product.desc;
        detailsContainer.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.img}" alt="${name}" class="product-image-large">
            </div>
            <div class="product-details-content">
                <div class="badge" style="margin-bottom: 2rem;">${inStockTxt}</div>
                <h1>${name}</h1>
                <p class="price-large">${product.price}</p>
                <p class="product-description">${desc}</p>
                <div class="actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})" style="width:200px; border-radius:12px; padding: 1.2rem; font-size:1.1rem;">${addToCartTxt}</button>
                    <a href="products.html" class="btn btn-outline" style="border-radius:12px; padding: 1.2rem; font-size:1.1rem; line-height:1.2;">${backBtnTxt}</a>
                </div>
            </div>
        `;
    } else {
        detailsContainer.innerHTML = `<h2>Product not found.</h2><a href="products.html" class="btn btn-outline">${backBtnTxt}</a>`;
    }
}

// Interactive Soft Background Glow Mapping
const glow = document.getElementById('glow');
document.addEventListener('mousemove', (e) => {
    // Smoothly follow the mouse with dual gradient logic written in CSS
    requestAnimationFrame(() => {
        glow.style.setProperty('--x', e.clientX + 'px');
        glow.style.setProperty('--y', e.clientY + 'px');
    });
});

// Bilingual Dictionary adapted for PureKnit
const translations = {
  en: {
    "nav_home": "Home",
    "nav_products": "Products",
    "nav_cart": "Cart",
    "nav_help": "Help",
    "nav_login": "Login",
    "badge_new": "PureKnit Soft Hosiery",
    "hero_title": "The Premium Yarn & Hosiery Network",
    "hero_subtitle": "A minimal, soft-touch interface bridging domestic artisans with global hosiery buyers.",
    "btn_explore": "Explore Collection",
    "btn_seller": "Become a Seller",
    "feat_1_title": "Global Reach",
    "feat_1_desc": "Connect your soft knits with international buyers effortlessly.",
    "feat_2_title": "Instant Quotes",
    "feat_2_desc": "Real-time pricing for bulk domestic orders.",
    "feat_3_title": "Verified Patterns",
    "feat_3_desc": "Trustworthy tracking from the very first thread to the final weave."
  },
  hi: {
    "nav_home": "होम",
    "nav_products": "उत्पाद",
    "nav_cart": "कार्ट",
    "nav_help": "मदद",
    "nav_login": "लॉगिन",
    "badge_new": "प्योरनिट सॉफ्ट होजरी",
    "hero_title": "प्रीमियम यार्न और होजरी नेटवर्क",
    "hero_subtitle": "घरेलू कारीगरों को वैश्विक होजरी खरीदारों से जोड़ने वाला एक न्यूनतम, सॉफ्ट-टच इंटरफ़ेस।",
    "btn_explore": "कलेक्शन देखें",
    "btn_seller": "विक्रेता बनें",
    "feat_1_title": "वैश्विक पहुंच",
    "feat_1_desc": "अपने सॉफ्ट निट्स को अंतरराष्ट्रीय खरीदारों के साथ सहजता से जोड़ें।",
    "feat_2_title": "त्वरित उद्धरण",
    "feat_2_desc": "थोक घरेलू आदेशों के लिए वास्तविक समय मूल्य निर्धारण।",
    "feat_3_title": "सत्यापित पैटर्न",
    "feat_3_desc": "पहले धागे से लेकर अंतिम बुनाई तक भरोसेमंद ट्रैकिंग।"
  }
};

Object.assign(translations.en, {
    btn_add: "Add to Cart", btn_back: "Back to Catalog", stock: "In Stock", each: "each",
    title_products: "Our Hosiery Collection", title_cart: "Shopping Cart", title_help: "Help & Support",
    cart_empty: "Your cart is entirely empty.", cart_summary: "Summary", cart_subtotal: "Subtotal:", cart_total: "Total:", cart_checkout: "Proceed to Checkout",
    help_desc: "We're here to help you with your hosiery orders.", help_contact: "Contact Us", help_faq: "Frequently Asked Questions",
    tab_login: "Login", tab_signup: "Sign Up", auth_welcome: "Welcome Back", auth_join: "Create Account"
});
Object.assign(translations.hi, {
    btn_add: "कार्ट में डालें", btn_back: "कैटलॉग पर वापस", stock: "स्टॉक में है", each: "प्रत्येक",
    title_products: "हमारा होज़री संग्रह", title_cart: "शॉपिंग कार्ट", title_help: "सहायता और समर्थन",
    cart_empty: "आपका कार्ट पूरी तरह खाली है।", cart_summary: "सारांश", cart_subtotal: "उपयोग राशि:", cart_total: "कुल:", cart_checkout: "चेकआउट के लिए आगे बढ़ें",
    help_desc: "हम आपके होज़री ऑर्डर में आपकी सहायता के लिए यहां हैं।", help_contact: "संपर्क करें", help_faq: "अक्सर पूछे जाने वाले प्रश्न",
    tab_login: "लॉगिन", tab_signup: "साइन अप", auth_welcome: "वापसी पर स्वागत है", auth_join: "खाता बनाएं"
});

let currentLang = localStorage.getItem('site_lang_pureknit') || 'en';

function applyTranslations() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLang][key];
      } else {
        el.innerText = translations[currentLang][key];
      }
    }
  });

  const langBtn = document.getElementById('langToggleBtn');
  if(langBtn) {
    langBtn.innerText = currentLang === 'en' ? 'EN / HI' : 'HI / EN';
  }
  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('site_lang_pureknit', currentLang);
  
  // Custom micro-animation for text swap fading
  const hero = document.querySelector('.hero-content');
  if(hero) {
      hero.style.opacity = '0';
      setTimeout(() => {
        applyTranslations();
        hero.style.opacity = '1';
        hero.style.transition = 'opacity 0.25s ease';
      }, 150);
  } else {
      applyTranslations();
  }

  // Live UI Rerender components dynamically using new dictionary states
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderProductDetails === 'function') renderProductDetails();
  if (typeof renderCart === 'function') renderCart();
  if (typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
}

Object.assign(translations.en, {
    title_seller: "Become a Verified Seller",
    seller_desc: "Join India's premium hosiery network and reach thousands of buyers daily.",
    label_company: "Company Name",
    label_gst: "GSTIN / VAT Number",
    label_phone: "Phone Number",
    btn_apply_seller: "Submit Application",
    title_checkout: "Secure Checkout", header_shipping: "Shipping Information",
    label_address: "Street Address", label_city: "City", label_state: "State / Province", label_zip: "ZIP / Postal Code",
    header_payment: "Payment Details", label_card: "Credit/Debit Card Number", label_expiry: "Expiry Date (MM/YY)", label_cvv: "CVV Security Code",
    btn_place_order: "Place Order", msg_order_success: "Order Placed Successfully! Thank you."
});
Object.assign(translations.hi, {
    title_seller: "एक सत्यापित विक्रेता बनें",
    seller_desc: "भारत के प्रीमियम होज़री नेटवर्क से जुड़ें और रोज़ाना हज़ारों खरीदारों तक पहुँचें।",
    label_company: "कंपनी का नाम",
    label_gst: "जीएसटी / वैट नंबर",
    label_phone: "फ़ोन नंबर",
    btn_apply_seller: "आवेदन जमा करें",
    title_checkout: "सुरक्षित चेकआउट", header_shipping: "शिपिंग जानकारी",
    label_address: "सड़क का पता", label_city: "शहर", label_state: "राज्य / प्रांत", label_zip: "पिन कोड",
    header_payment: "भुगतान विवरण", label_card: "क्रेडिट/डेबिट कार्ड नंबर", label_expiry: "समाप्ति तिथि (MM/YY)", label_cvv: "CVV सुरक्षा कोड",
    btn_place_order: "ऑर्डर दें", msg_order_success: "ऑर्डर सफलतापूर्वक दिया गया! धन्यवाद।"
});

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  const btn = document.getElementById('langToggleBtn');
  if(btn) {
    btn.addEventListener('click', toggleLanguage);
  }
  
  // Render Dynamic Content Globally Assuming Containers Exist
  renderProducts();
  renderProductDetails();
  renderCart();
  if (typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
  initAuth();

  // --- Interactive Canvas Yarn Balls ---
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
      const ctx = canvas.getContext('2d');
      let particlesArray = [];
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      let mouse = { x: null, y: null, radius: 150 };
      
      window.addEventListener('mousemove', function(event) {
          mouse.x = event.x;
          mouse.y = event.y;
      });
      
      window.addEventListener('resize', function() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          init();
      });
      
      class YarnBall {
          constructor(x, y, dx, dy, size, color) {
              this.x = x; this.y = y; this.dx = dx; this.dy = dy; 
              this.size = size; this.color = color;
              this.baseX = this.x; this.baseY = this.y;
              this.density = (Math.random() * 30) + 1;
              this.angle = Math.random() * Math.PI * 2;
              this.spinSpeed = (Math.random() - 0.5) * 0.03;
          }
          draw() {
              ctx.save();
              ctx.translate(this.x, this.y);
              ctx.rotate(this.angle);

              // Base circle
              ctx.beginPath();
              ctx.arc(0, 0, this.size, 0, Math.PI * 2, false);
              ctx.fillStyle = this.color;
              ctx.fill();

              // Yarn threads (stylized intersecting curves)
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
              ctx.lineWidth = this.size / 6;
              ctx.lineCap = 'round';

              // Curve left
              ctx.beginPath();
              ctx.arc(-this.size*0.2, 0, this.size*0.8, -Math.PI/2.5, Math.PI/2.5);
              ctx.stroke();

              // Curve right
              ctx.beginPath();
              ctx.arc(this.size*0.2, 0, this.size*0.8, Math.PI - Math.PI/2.5, Math.PI + Math.PI/2.5);
              ctx.stroke();

              // Diagonal bands
              ctx.beginPath();
              ctx.moveTo(-this.size * 0.6, -this.size * 0.4);
              ctx.lineTo(this.size * 0.6, this.size * 0.4);
              ctx.stroke();

              ctx.beginPath();
              ctx.moveTo(-this.size * 0.4, -this.size * 0.6);
              ctx.lineTo(this.size * 0.4, this.size * 0.6);
              ctx.stroke();

              ctx.restore();
          }
          update() {
              this.angle += this.spinSpeed;

              let dx = mouse.x - this.x;
              let dy = mouse.y - this.y;
              let distance = Math.sqrt(dx * dx + dy * dy);
              let forceDirectionX = dx / distance;
              let forceDirectionY = dy / distance;
              let force = (mouse.radius - distance) / mouse.radius;
              let directionX = forceDirectionX * force * this.density;
              let directionY = forceDirectionY * force * this.density;
              
              if (distance < mouse.radius) {
                  this.x -= directionX;
                  this.y -= directionY;
              } else {
                  if (this.x !== this.baseX) { this.x -= (this.x - this.baseX)/20; }
                  if (this.y !== this.baseY) { this.y -= (this.y - this.baseY)/20; }
              }
              
              this.x += this.dx;
              this.y += this.dy;
              
              if (this.x + this.size > canvas.width || this.x - this.size < 0) this.dx = -this.dx;
              if (this.y + this.size > canvas.height || this.y - this.size < 0) this.dy = -this.dy;
              
              this.draw();
          }
      }
      
      function init() {
          particlesArray = [];
          // Less elements but larger sizes for stylized yarn balls
          let numberOfParticles = (canvas.height * canvas.width) / 12000;
          const colors = ['rgba(255, 138, 101, 0.7)', 'rgba(126, 87, 194, 0.7)', 'rgba(209, 196, 233, 0.7)'];
          for (let i = 0; i < numberOfParticles; i++) {
              let size = (Math.random() * 15) + 10;
              let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
              let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
              let dx = (Math.random() * 1) - 0.5;
              let dy = (Math.random() * 1) - 0.5;
              let color = colors[Math.floor(Math.random() * colors.length)];
              particlesArray.push(new YarnBall(x, y, dx, dy, size, color));
          }
      }
      
      function animate() {
          requestAnimationFrame(animate);
          ctx.clearRect(0, 0, innerWidth, innerHeight);
          for (let i = 0; i < particlesArray.length; i++) {
              particlesArray[i].update();
          }
      }
      
      init();
      animate();
  }
  
  updateCartCounter();
});

// --- Advanced Cart Logic ---
let cartItems = JSON.parse(localStorage.getItem('pureknit_cart_items') || '[]');

function getCartTotalCount() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function updateCartCounter() {
    const total = getCartTotalCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
        b.innerText = total;
        b.style.transition = 'transform 0.2s';
        b.style.transform = 'scale(1.3)';
        setTimeout(() => b.style.transform = 'scale(1)', 200);
    });
}

window.addToCart = function(id) {
    let existing = cartItems.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cartItems.push({ id: id, quantity: 1 });
    }
    localStorage.setItem('pureknit_cart_items', JSON.stringify(cartItems));
    updateCartCounter();
    
    // Explicitly re-render cart locally if viewing the cart page instance!
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
};

window.removeFromCart = function(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('pureknit_cart_items', JSON.stringify(cartItems));
    updateCartCounter();
    renderCart();
};

window.updateQuantity = function(id, delta) {
    let existing = cartItems.find(item => item.id === id);
    if (existing) {
        existing.quantity += delta;
        if (existing.quantity <= 0) {
            cartItems = cartItems.filter(item => item.id !== id);
        }
        localStorage.setItem('pureknit_cart_items', JSON.stringify(cartItems));
        updateCartCounter();
        renderCart();
    }
};

function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary-totals');
    if (!cartContainer || !cartSummary) return;

    let cl = localStorage.getItem('site_lang_pureknit') || 'en';
    const dictObj = translations[cl] || translations.en;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<div style="text-align:center; padding: 3rem;"><p style="font-size:1.2rem; color:var(--text-muted); margin-bottom:1.5rem;">${dictObj.cart_empty || "Your cart is entirely empty."}</p><a href="products.html" class="btn btn-primary" style="display:inline-block; padding:1rem 2rem; border-radius:12px;">Shop Now</a></div>`;
        cartSummary.innerHTML = `
            <h3>${dictObj.cart_summary || "Summary"}</h3>
            <div class="summary-row"><span>${dictObj.cart_total || "Total:"}</span><span>₹0</span></div>
            <button class="btn btn-primary" disabled style="width:100%; margin-top:1.5rem; border-radius:12px; opacity:0.5; cursor:not-allowed;">${dictObj.cart_checkout || "Proceed to Checkout"}</button>
        `;
        return;
    }

    let cartHTML = '';
    let totalPrice = 0;

    cartItems.forEach(cartItem => {
        let product = globalProductsList.find(p => p.id === cartItem.id);
        if (product) {
            let numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
            let rowTotal = numericPrice * cartItem.quantity;
            totalPrice += rowTotal;
            let name = cl === 'hi' && product.name_hi ? product.name_hi : product.name;

            cartHTML += `
                <div class="cart-item">
                    <a href="product_details.html?id=${product.id}">
                        <img src="${product.img}" alt="${name}" class="cart-item-img">
                    </a>
                    <div class="cart-item-details">
                        <a href="product_details.html?id=${product.id}" style="text-decoration:none;"><h4>${name}</h4></a>
                        <div class="price" style="color:var(--text-muted); font-size:0.95rem;">${product.price} ${dictObj.each || "each"}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${cartItem.quantity}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-total">₹${rowTotal.toLocaleString('en-IN')}</div>
                    <button class="remove-btn" onclick="removeFromCart(${product.id})" title="Remove Item">✖</button>
                </div>
            `;
        }
    });

    cartContainer.innerHTML = cartHTML;
    cartSummary.innerHTML = `
        <h3>${dictObj.cart_summary || "Summary"}</h3>
        <div class="summary-row"><span>${dictObj.cart_subtotal || "Subtotal:"}</span><span>₹${totalPrice.toLocaleString('en-IN')}</span></div>
        <div class="summary-row"><span>Shipping:</span><span style="color:var(--accent);">Free</span></div>
        <hr style="border:none; border-top:1px solid rgba(74,20,140,0.1); margin: 1.5rem 0;">
        <div class="summary-row" style="font-weight:700; font-size:1.35rem; color:var(--text-heading);"><span>${dictObj.cart_total || "Total:"}</span><span>₹${totalPrice.toLocaleString('en-IN')}</span></div>
        <button class="btn btn-primary" onclick="window.location.href='checkout.html'" style="width:100%; margin-top:2rem; border-radius:12px; padding:1rem; font-size:1.1rem; cursor:pointer;">${dictObj.cart_checkout || "Proceed to Checkout"}</button>
    `;
}

window.renderCheckoutSummary = function() {
    const summaryContainer = document.getElementById('checkout-dynamic-summary');
    if (!summaryContainer) return;
    
    let cl = localStorage.getItem('site_lang_pureknit') || 'en';
    const dictObj = translations[cl] || translations.en;
    
    let totalPrice = 0;
    cartItems.forEach(cartItem => {
        let product = globalProductsList.find(p => p.id === cartItem.id);
        if (product) {
            let numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
            totalPrice += numericPrice * cartItem.quantity;
        }
    });
    
    summaryContainer.innerHTML = `
        <div class="summary-row" style="margin-bottom:1rem; display:flex; justify-content:space-between;"><span>${dictObj.cart_subtotal || "Subtotal:"}</span><span style="font-weight:600;">₹${totalPrice.toLocaleString('en-IN')}</span></div>
        <div class="summary-row" style="margin-bottom:1rem; display:flex; justify-content:space-between;"><span>Shipping:</span><span style="color:var(--accent); font-weight:600;">Free</span></div>
        <hr style="border:none; border-top:1px solid rgba(74,20,140,0.1); margin: 1.5rem 0;">
        <div class="summary-row" style="margin-bottom:1.5rem; display:flex; justify-content:space-between; font-weight:700; font-size:1.35rem; color:var(--text-heading);"><span>${dictObj.cart_total || "Total:"}</span><span style="color:var(--primary);">₹${totalPrice.toLocaleString('en-IN')}</span></div>
    `;
};

window.processCheckout = function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('checkout-success');
    successMsg.style.display = 'block';
    
    cartItems = [];
    localStorage.setItem('pureknit_cart_items', JSON.stringify([]));
    updateCartCounter();
    
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
};

// --- Authentication Local Database Logic ---

function initAuth() {
    let currentUser = JSON.parse(localStorage.getItem('pureknit_current_user'));
    
    // Globally mutate nav names
    const loginNavs = document.querySelectorAll('a[data-lang="nav_login"]');
    loginNavs.forEach(nav => {
        if (currentUser) {
            nav.innerText = "Profile"; 
        } else {
            if (nav.innerText !== 'Login') nav.innerText = "Login";
        }
    });

    // Check if we are physically on the login page context
    if (window.location.pathname.includes('login.html')) {
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const profileView = document.getElementById('profile-view');
        const authTabs = document.querySelector('.auth-tabs');

        if (currentUser) {
            // Logged in: Hide auth forms, show profile hub instead
            authTabs.style.display = 'none';
            if(loginForm) loginForm.classList.remove('active');
            if(signupForm) signupForm.classList.remove('active');
            if(profileView) profileView.classList.add('active');
            
            document.getElementById('profile-name').innerText = currentUser.name;
            document.getElementById('profile-email').innerText = currentUser.email;
        } else {
            // Not Logged in
            authTabs.style.display = 'flex';
            if(profileView) profileView.classList.remove('active');
        }
    }
}

window.switchAuthTab = function(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => {
        if(f.id !== 'profile-view') f.classList.remove('active');
    });
    
    if(tab === 'login') {
        document.getElementById('tab-login').classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.getElementById('tab-signup').classList.add('active');
        document.getElementById('signup-form').classList.add('active');
    }
};

window.handleSignup = function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const password = document.getElementById('signup-password').value;
    const errDiv = document.getElementById('signup-error');
    const sucDiv = document.getElementById('signup-success');
    
    errDiv.style.display = 'none';
    sucDiv.style.display = 'none';

    let usersDB = JSON.parse(localStorage.getItem('pureknit_users_db') || '[]');

    if (usersDB.find(u => u.email === email)) {
        errDiv.innerText = "Error: Email is already securely registered!";
        errDiv.style.display = 'block';
        return;
    }

    const newUser = { name, email, password }; // Simulated Secure Encrypt Hash Drop
    usersDB.push(newUser);
    localStorage.setItem('pureknit_users_db', JSON.stringify(usersDB));
    
    // Automatically login newly minted user
    localStorage.setItem('pureknit_current_user', JSON.stringify(newUser));
    
    sucDiv.innerText = "Account successfully initialized! Routing...";
    sucDiv.style.display = 'block';
    
    setTimeout(() => {
        window.location.reload();
    }, 800);
};

window.handleLogin = function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errDiv = document.getElementById('login-error');
    
    errDiv.style.display = 'none';

    let usersDB = JSON.parse(localStorage.getItem('pureknit_users_db') || '[]');
    let user = usersDB.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('pureknit_current_user', JSON.stringify(user));
        window.location.reload();
    } else {
        errDiv.innerText = "Error: Invalid email or password validation.";
        errDiv.style.display = 'block';
    }
};

window.handleLogout = function() {
    localStorage.removeItem('pureknit_current_user');
    window.location.reload();
};
