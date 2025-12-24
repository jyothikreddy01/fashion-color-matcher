body {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: #0b0b0b;
  color: #f5f5f5;
}

.luxury-container {
  max-width: 420px;
  margin: 60px auto;
  text-align: center;
}

h1 {
  letter-spacing: 4px;
  font-size: 28px;
  color: #d4af37;
}

.subtitle {
  font-size: 13px;
  color: #aaa;
  margin-bottom: 30px;
}

.card {
  background: #141414;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 0 40px rgba(212,175,55,0.08);
}

label {
  display: block;
  margin-bottom: 6px;
  text-align: left;
  font-size: 13px;
  color: #ccc;
}

select {
  width: 100%;
  padding: 10px;
  background: #0f0f0f;
  border: 1px solid #2a2a2a;
  color: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 20px;
}

h3 {
  margin: 18px 0 10px;
  color: #d4af37;
  font-size: 14px;
  text-align: left;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.color-dot {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #222;
  transition: all 0.25s ease;
}

.color-dot:hover {
  transform: scale(1.1);
}

.color-dot.active {
  border: 3px solid #d4af37;
  box-shadow: 0 0 10px rgba(212,175,55,0.6);
}

button {
  width: 100%;
  margin-top: 25px;
  padding: 12px;
  background: linear-gradient(135deg, #d4af37, #b8962e);
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

#result,
#bestShoe {
  margin-top: 20px;
  font-size: 14px;
}

.brand-footer {
  margin: 40px 0 20px;
  text-align: center;
  font-size: 12px;
  color: #777;
  letter-spacing: 1px;
}

.brand-footer span {
  color: #d4af37;
  font-weight: 600;
}
