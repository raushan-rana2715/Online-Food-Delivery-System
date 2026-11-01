import { useState } from "react";
import { Leaf, UserRound, LockKeyhole, Mail, ArrowRight, ShieldCheck, Bike, Utensils, Heart, Eye, EyeOff } from "lucide-react";

export default function AuthModal({ mode, onClose, onLogin, onSignup, onSwitch }) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [showPassword,setShowPassword]=useState(false);

  function submit(e){
    e.preventDefault();setError("");
    const result=mode==="signup"
      ? onSignup({name:name.trim(),email:email.trim().toLowerCase(),password})
      : onLogin({email:email.trim().toLowerCase(),password});
    if(!result.ok)setError(result.message);
  }

  return <div className="auth-screen">
    <div className="auth-topbar">
      <div className="auth-logo"><span className="auth-logo-mark">T</span><span>TWIGGY<small>FOOD RESCUE & DELIVERY</small></span></div>
      <span className="auth-top-tag"><ShieldCheck size={14}/> Fresh food. Less waste.</span>
    </div>
    <main className="auth-layout">
      <section className="auth-welcome">
        <div className="auth-welcome-copy">
          <span className="auth-kicker"><Leaf size={14}/> GOOD FOOD, GOOD PURPOSE</span>
          <h1>Cravings met.<br/><em>Food waste cut.</em></h1>
          <p className="auth-intro">Welcome to Twiggy — your food delivery destination with a purpose. Discover delicious meals, explore exciting offers, and enjoy convenient delivery while helping good food find a happy home.</p>
          <div className="auth-feature-list">
            <div><span><Utensils size={17}/></span><p><b>Delicious choices</b><small>Explore meals from nearby kitchens.</small></p></div>
            <div><span><Bike size={17}/></span><p><b>Fast & convenient</b><small>Simple ordering and easy order tracking.</small></p></div>
            <div><span><Heart size={17}/></span><p><b>Twiggy Food Rescue</b><small>Find special deals on available surplus food and help reduce waste.</small></p></div>
          </div>
          <div className="auth-hero-image"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=90" alt="Delicious burger"/><div className="auth-image-caption"><b>GOOD FOOD. FAST DELIVERY.</b><small>Discover your next favourite meal.</small></div></div>
        </div>
      </section>
      <section className="auth-form-side">
        <div className="auth-card">
          <div className="auth-card-icon"><Leaf size={22}/></div>
          <p className="auth-eyebrow">{mode==="signup"?"JOIN THE TWIGGY COMMUNITY":"WELCOME BACK TO TWIGGY"}</p>
          <h2>{mode==="signup"?"Create your account":"Login to your account"}</h2>
          <p className="auth-card-sub">{mode==="signup"?"Sign up to explore food, offers and food rescue deals.":"Enter your details to continue to your food dashboard."}</p>
          <form onSubmit={submit} className="auth-page-form">
            {mode==="signup"&&<label><span>Full name</span><div className="auth-input"><UserRound size={17}/><input required autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your full name"/></div></label>}
            <label><span>Email address</span><div className="auth-input"><Mail size={17}/><input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div></label>
            <label><span>Password</span><div className="auth-input"><LockKeyhole size={17}/><input required minLength="6" type={showPassword?"text":"password"} autoComplete={mode==="signup"?"new-password":"current-password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters"/><button type="button" className="password-toggle" onClick={()=>setShowPassword(!showPassword)} aria-label="Show or hide password">{showPassword?<EyeOff size={16}/>:<Eye size={16}/>}</button></div></label>
            {error&&<p className="auth-error">{error}</p>}
            <button className="auth-submit" type="submit">{mode==="signup"?"Create account":"Login"} <ArrowRight size={16}/></button>
          </form>
          <div className="auth-switch">{mode==="signup"?"Already have an account?":"Don't have an account yet?"}<button onClick={onSwitch}>{mode==="signup"?"Login":"Sign up"}</button></div>
          <p className="auth-privacy"><ShieldCheck size={13}/> Your demo account is saved in this browser's Local Storage.</p>
        </div>
        <p className="auth-footnote">By continuing, you agree to use Twiggy responsibly and help reduce food waste.</p>
      </section>
    </main>
    <footer className="auth-footer"><b>TWIGGY <em>FOOD RESCUE</em></b><span>Good food deserves a second chance.</span><span>© {new Date().getFullYear()} Twiggy</span></footer>
  </div>;
}
