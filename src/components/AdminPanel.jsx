import { useState } from "react";
import { Plus, Trash2, PackageCheck, HeartHandshake } from "lucide-react";

const blank = {
  name: "", restaurant: "", category: "Veg", originalPrice: "", price: "",
  quantity: "", pickup: "Today, 7:00–8:00 PM", description: "",
  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=85"
};

export default function AdminPanel({ foods, donations, onAddFood, onDeleteFood, onAddDonation }) {
  const [form, setForm] = useState(blank);
  const [donation, setDonation] = useState({ title: "", partner: "", quantity: "", pickup: "", note: "" });
  const [message, setMessage] = useState("");

  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function addFood(e) {
    e.preventDefault();
    if (Number(form.price) >= Number(form.originalPrice)) {
      setMessage("Discounted price must be lower than the original price.");
      return;
    }
    onAddFood({ ...form, id: crypto.randomUUID(), originalPrice: Number(form.originalPrice), price: Number(form.price), quantity: Number(form.quantity), status: "available" });
    setForm(blank);
    setMessage("Food deal added successfully.");
  }
  function addDonation(e) {
    e.preventDefault();
    onAddDonation({ ...donation, id: crypto.randomUUID(), quantity: Number(donation.quantity), status: "Available" });
    setDonation({ title: "", partner: "", quantity: "", pickup: "", note: "" });
    setMessage("Donation listing added.");
  }

  return (
    <div className="admin-layout">
      <div className="section-heading">
        <div><p className="eyebrow">ADMIN WORKSPACE</p><h2>Manage Food Rescue</h2><p className="muted">Publish discounted food and coordinate safe food donations.</p></div>
      </div>
      {message && <div className="success-note">{message}</div>}
      <div className="admin-grid">
        <section className="panel">
          <div className="panel-title"><Plus size={19}/><h3>Add a flash deal</h3></div>
          <form className="admin-form" onSubmit={addFood}>
            <label className="field"><span>Food name</span><input name="name" required value={form.name} onChange={change} placeholder="e.g. Paneer wrap"/></label>
            <label className="field"><span>Restaurant</span><input name="restaurant" required value={form.restaurant} onChange={change} placeholder="Restaurant name"/></label>
            <div className="form-two">
              <label className="field"><span>Category</span><select name="category" value={form.category} onChange={change}><option>Veg</option><option>Non-Veg</option></select></label>
              <label className="field"><span>Quantity</span><input name="quantity" type="number" min="1" required value={form.quantity} onChange={change}/></label>
            </div>
            <div className="form-two">
              <label className="field"><span>Original price (₹)</span><input name="originalPrice" type="number" min="1" required value={form.originalPrice} onChange={change}/></label>
              <label className="field"><span>Deal price (₹)</span><input name="price" type="number" min="1" required value={form.price} onChange={change}/></label>
            </div>
            <label className="field"><span>Pickup window</span><input name="pickup" required value={form.pickup} onChange={change}/></label>
            <label className="field"><span>Food image URL</span><input name="image" value={form.image} onChange={change}/></label>
            <label className="field"><span>Description</span><textarea name="description" required rows="3" value={form.description} onChange={change}/></label>
            <button className="btn btn-primary btn-full"><Plus size={17}/> Publish deal</button>
          </form>
        </section>
        <section className="panel">
          <div className="panel-title"><HeartHandshake size={19}/><h3>Add a donation listing</h3></div>
          <p className="muted small">Only list food that has been safely handled, stored and is suitable for donation.</p>
          <form className="admin-form" onSubmit={addDonation}>
            <label className="field"><span>Food / meal title</span><input required value={donation.title} onChange={e => setDonation({...donation,title:e.target.value})} placeholder="Sealed meal boxes"/></label>
            <label className="field"><span>NGO / collection partner</span><input required value={donation.partner} onChange={e => setDonation({...donation,partner:e.target.value})} placeholder="Partner name"/></label>
            <div className="form-two">
              <label className="field"><span>Quantity</span><input required type="number" min="1" value={donation.quantity} onChange={e => setDonation({...donation,quantity:e.target.value})}/></label>
              <label className="field"><span>Pickup time</span><input required value={donation.pickup} onChange={e => setDonation({...donation,pickup:e.target.value})} placeholder="Today, 6 PM"/></label>
            </div>
            <label className="field"><span>Food safety / collection note</span><textarea required rows="3" value={donation.note} onChange={e => setDonation({...donation,note:e.target.value})}/></label>
            <button className="btn btn-outline btn-full"><HeartHandshake size={17}/> Add donation</button>
          </form>
          <div className="admin-list">
            <h4>Donation listings ({donations.length})</h4>
            {donations.map(item => <div className="mini-row" key={item.id}><div><strong>{item.title}</strong><p className="muted small">{item.partner} · {item.quantity} meals</p></div><span className="status-chip">{item.status}</span></div>)}
          </div>
        </section>
      </div>
      <section className="panel inventory-panel">
        <div className="panel-title"><PackageCheck size={19}/><h3>Food deal inventory ({foods.length})</h3></div>
        {foods.map(food => <div className="inventory-row" key={food.id}><div><strong>{food.name}</strong><p className="muted small">{food.restaurant} · ₹{food.price} · {food.quantity} left</p></div><button className="icon-button danger" onClick={() => onDeleteFood(food.id)} aria-label={`Delete ${food.name}`}><Trash2 size={17}/></button></div>)}
        {foods.length === 0 && <p className="muted">No food deals listed.</p>}
      </section>
    </div>
  );
}