// import React from "react";
// import axios from "axios";
// import { PlusSquare, MessageSquare, UserCog, Search, Eye, CheckCircle2, Trash2, Pencil, X } from "lucide-react";


// function Admin() {
//   const [active, setActive] = React.useState("serviceprovider");
//   const [form, setForm] = React.useState({ category: "", name: "", price: "", description: "" });
//   const [services, setServices] = React.useState([]);
//   const firstInputRef = React.useRef(null);
//   const [providerQuery, setProviderQuery] = React.useState("");
//   const [providerLoading, setProviderLoading] = React.useState(false);
//   const [providerError, setProviderError] = React.useState("");
//   const [products, setProducts] = React.useState([]);
//   const [feedbacks, setFeedbacks] = React.useState([
//     { id: "#F1024", name: "Aarav Sharma", message: "Great quality and fast delivery.", rating: 5, date: "2026-01-10", reviewed: false },
//     { id: "#F1023", name: "Priya Verma", message: "Design matched perfectly.", rating: 4, date: "2026-01-08", reviewed: false },
//     { id: "#F1022", name: "Rohan Singh", message: "Loved the T-shirt print.", rating: 5, date: "2026-01-05", reviewed: true },
//   ]);
//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const [editingId, setEditingId] = React.useState(null);
//   const onAdd = () => {
//     if (!form.category || !form.name) return;
//     const id = Date.now().toString();
//     setServices([{ ...form, id }, ...services]);
//     addLocalProviderItem({ ...form, id });
//     setForm({ category: "", name: "", price: "", description: "" });
//     requestAnimationFrame(() => firstInputRef.current?.focus());
//   };
//   const onReset = () => {
//     setForm({ category: "", name: "", price: "", description: "" });
//     requestAnimationFrame(() => firstInputRef.current?.focus());
//   };
//   const [localProviderItems, setLocalProviderItems] = React.useState([]);
//   const addLocalProviderItem = (s) => {
//     const id = s.id || "local-" + Date.now().toString();
//     setLocalProviderItems((prev) => [
//       {
//         _id: id,
//         name: s.name,
//         category: s.category,
//         price: s.price,
//         media: undefined,
//       },
//       ...prev,
//     ]);
//   };
//   const onEditService = (s) => {
//     setEditingId(s.id);
//     setForm({ category: s.category || "", name: s.name || "", price: s.price || "", description: s.description || "" });
//     requestAnimationFrame(() => firstInputRef.current?.focus());
//   };
//   const onUpdateService = () => {
//     if (!editingId) return;
//     if (!form.category || !form.name) return;
//     setServices((prev) => prev.map((s) => (s.id === editingId ? { ...s, ...form } : s)));
//     setLocalProviderItems((prev) =>
//       prev.map((i) => (i._id === editingId ? { ...i, name: form.name, category: form.category, price: form.price } : i))
//     );
//     setEditingId(null);
//     setForm({ category: "", name: "", price: "", description: "" });
//     requestAnimationFrame(() => firstInputRef.current?.focus());
//   };
//   const onCancelEdit = () => {
//     setEditingId(null);
//     setForm({ category: "", name: "", price: "", description: "" });
//     requestAnimationFrame(() => firstInputRef.current?.focus());
//   };
//   const onDeleteService = (id) => {
//     setServices((prev) => prev.filter((s) => s.id !== id));
//     setLocalProviderItems((prev) => prev.filter((i) => i._id !== id));
//     if (editingId === id) {
//       setEditingId(null);
//       setForm({ category: "", name: "", price: "", description: "" });
//     }
//   };
//   const [fbForm, setFbForm] = React.useState({ name: "", message: "", rating: "" });
//   const fbFirstInputRef = React.useRef(null);
//   const onFbChange = (e) => setFbForm({ ...fbForm, [e.target.name]: e.target.value });
//   const onFbSave = () => {
//     if (!fbForm.name || !fbForm.message) return;
//     const r = parseInt(fbForm.rating, 10);
//     const rating = isNaN(r) ? 0 : Math.max(1, Math.min(5, r));
//     const id = "#F" + Date.now().toString().slice(-4);
//     const date = new Date().toISOString().slice(0, 10);
//     setFeedbacks([{ id, name: fbForm.name.trim(), message: fbForm.message.trim(), rating, date, reviewed: false }, ...feedbacks]);
//     setFbForm({ name: "", message: "", rating: "" });
//     requestAnimationFrame(() => fbFirstInputRef.current?.focus());
//   };
//   const onFbReset = () => {
//     setFbForm({ name: "", message: "", rating: "" });
//     requestAnimationFrame(() => fbFirstInputRef.current?.focus());
//   };
//   const markReviewed = (id) => setFeedbacks((prev) => prev.map((f) => (f.id === id ? { ...f, reviewed: !f.reviewed } : f)));
//   const deleteFeedback = (id) => setFeedbacks((prev) => prev.filter((f) => f.id !== id));
//   const [viewFeedback, setViewFeedback] = React.useState(null);
//   const fetchProducts = async () => {
//     setProviderLoading(true);
//     setProviderError("");
//     try {
//       const res = await axios.get(`http://localhost:5000/api/products?search=${encodeURIComponent(providerQuery)}`);
//       setProducts(Array.isArray(res.data) ? res.data : []);
//     } catch {
//       setProviderError("Failed to load products");
//     } finally {
//       setProviderLoading(false);
//     }
//   };
//   React.useEffect(() => {
//     fetchProducts();
//   }, []);
//   const displayItems = React.useMemo(() => {
//     const q = providerQuery.trim().toLowerCase();
//     const filteredLocal = localProviderItems.filter((i) => {
//       const n = (i.name || "").toLowerCase();
//       const c = (i.category || "").toLowerCase();
//       return q.length === 0 || n.includes(q) || c.includes(q);
//     });
//     return [...filteredLocal, ...products];
//   }, [localProviderItems, products, providerQuery]);
//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-28">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-12 gap-6 pt-24">
//           <aside className="col-span-12 lg:col-span-3">
//             <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//               <div className="px-4 py-4 text-lg font-semibold text-gray-900">Admin</div>
//               <nav className="border-t border-gray-100">
//                 <button
//                   onClick={() => setActive("serviceprovider")}
//                   className={`flex w-full items-center gap-3 px-4 py-3 text-sm ${
//                     active === "serviceprovider" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <UserCog size={18} />
//                   Service Provider
//                 </button>
//                 <button
//                   onClick={() => setActive("addservice")}
//                   className={`flex w-full items-center gap-3 px-4 py-3 text-sm ${
//                     active === "addservice" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <PlusSquare size={18} />
//                   Add Service
//                 </button>
//                 <button
//                   onClick={() => setActive("feedback")}
//                   className={`flex w-full items-center gap-3 px-4 py-3 text-sm ${
//                     active === "feedback" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <MessageSquare size={18} />
//                   Feedback List
//                 </button>
//               </nav>
//             </div>
//           </aside>
//           <main className="col-span-12 lg:col-span-9">
//             {active === "serviceprovider" && (
//               <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//                 <div className="flex items-center gap-3">
//                   <div className="relative w-full max-w-sm">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <input
//                       value={providerQuery}
//                       onChange={(e) => setProviderQuery(e.target.value)}
//                       placeholder="Search products"
//                       className="w-full rounded-lg border border-gray-300 bg-white px-10 py-2 text-sm outline-none focus:border-gray-400"
//                     />
//                   </div>
//                   <button
//                     onClick={fetchProducts}
//                     className="rounded-lg bg-[#02192F] px-3 py-2 text-sm font-semibold text-white active:scale-95"
//                   >
//                     Search
//                   </button>
//                 </div>
//                 <div className="mt-4">
//                   {providerLoading && <div className="text-sm text-gray-500">Loading...</div>}
//                   {providerError && <div className="text-sm text-red-600">{providerError}</div>}
//                   {!providerLoading && !providerError && products.length === 0 && (
//                     <div className="text-sm text-gray-500">No products found</div>
//                   )}
//                   <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                     {displayItems.map((item) => (
//                       <div key={item._id} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
//                         <div
//                           className="h-36 w-full bg-gray-100"
//                           style={{
//                             backgroundImage: item.media ? `url(${item.media})` : undefined,
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                           }}
//                         />
//                         <div className="p-3">
//                           <div className="text-sm font-semibold text-gray-900">{item.name}</div>
//                           <div className="mt-1 text-xs text-gray-600">{item.category}</div>
//                           <div className="mt-2 text-sm font-semibold text-[#02192F]">{item.price ? `₹${item.price}` : "-"}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//             {active === "addservice" && (
//               <form className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm" onReset={onReset} onSubmit={(e) => e.preventDefault()}>
//                 <div className="text-base font-semibold text-gray-900">Add Service</div>
//                 <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                   <input
//                     ref={firstInputRef}
//                     name="category"
//                     value={form.category}
//                     onChange={onChange}
//                     placeholder="Category"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={onChange}
//                     placeholder="Service Name"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                   <input
//                     name="price"
//                     value={form.price}
//                     onChange={onChange}
//                     placeholder="Price"
//                     type="number"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                   <input
//                     name="description"
//                     value={form.description}
//                     onChange={onChange}
//                     placeholder="Description"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                 </div>
//                 <div className="mt-4 flex items-center gap-3">
//                   {!editingId && (
//                     <>
//                       <button onClick={onAdd} className="rounded-lg bg-[#02192F] px-3 py-2 text-sm font-semibold text-white active:scale-95">
//                         Save
//                       </button>
//                       <button
//                         type="reset"
//                         className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:scale-95"
//                       >
//                         Reset
//                       </button>
//                     </>
//                   )}
//                   {editingId && (
//                     <>
//                       <button onClick={onUpdateService} className="rounded-lg bg-[#02192F] px-3 py-2 text-sm font-semibold text-white active:scale-95">
//                         Update
//                       </button>
//                       <button
//                         onClick={onCancelEdit}
//                         className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:scale-95"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   )}
//                 </div>
//                 {services.length > 0 && (
//                   <div className="mt-6">
//                     <div className="text-sm font-medium text-gray-900">Added Services</div>
//                     <div className="mt-2 overflow-x-auto">
//                       <table className="min-w-full text-left">
//                         <thead>
//                           <tr className="text-sm text-gray-500">
//                             <th className="px-3 py-2 font-medium">Category</th>
//                             <th className="px-3 py-2 font-medium">Name</th>
//                             <th className="px-3 py-2 font-medium">Price</th>
//                             <th className="px-3 py-2 font-medium">Description</th>
//                             <th className="px-3 py-2 font-medium">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody className="text-sm">
//                           {services.map((s) => (
//                             <tr key={s.id} className="border-t">
//                               <td className="px-3 py-2 text-gray-700">{s.category}</td>
//                               <td className="px-3 py-2 text-gray-900">{s.name}</td>
//                               <td className="px-3 py-2 text-gray-900">{s.price ? `₹${s.price}` : "-"}</td>
//                               <td className="px-3 py-2 text-gray-700">{s.description}</td>
//                               <td className="px-3 py-2">
//                                 <div className="flex items-center gap-2">
//                                   <button
//                                     onClick={() => onEditService(s)}
//                                     className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 active:scale-95"
//                                   >
//                                     <Pencil size={14} />
//                                     Edit
//                                   </button>
//                                   <button
//                                     onClick={() => onDeleteService(s.id)}
//                                     className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 active:scale-95"
//                                   >
//                                     <Trash2 size={14} />
//                                     Delete
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             )}
//             {active === "feedback" && (
//               <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
//                 <div className="text-base font-semibold text-gray-900">Feedback</div>
//                 <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                   <input
//                     ref={fbFirstInputRef}
//                     name="name"
//                     value={fbForm.name}
//                     onChange={onFbChange}
//                     placeholder="Name"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                   <input
//                     name="rating"
//                     value={fbForm.rating}
//                     onChange={onFbChange}
//                     placeholder="Rating (1-5)"
//                     type="number"
//                     min="1"
//                     max="5"
//                     className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                   />
//                   <div className="sm:col-span-2">
//                     <textarea
//                       name="message"
//                       value={fbForm.message}
//                       onChange={onFbChange}
//                       placeholder="Message"
//                       rows="3"
//                       className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
//                     />
//                   </div>
//                   <div className="sm:col-span-2 flex items-center gap-3">
//                     <button onClick={onFbSave} className="rounded-lg bg-[#02192F] px-3 py-2 text-sm font-semibold text-white active:scale-95">
//                       Save
//                     </button>
//                     <button
//                       onClick={onFbReset}
//                       className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:scale-95"
//                     >
//                       Reset
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-6 overflow-x-auto">
//                   <table className="min-w-full text-left">
//                     <thead>
//                       <tr className="text-sm text-gray-500">
//                         <th className="px-3 py-2 font-medium">ID</th>
//                         <th className="px-3 py-2 font-medium">Name</th>
//                         <th className="px-3 py-2 font-medium">Message</th>
//                         <th className="px-3 py-2 font-medium">Rating</th>
//                         <th className="px-3 py-2 font-medium">Date</th>
//                         <th className="px-3 py-2 font-medium">Status</th>
//                         <th className="px-3 py-2 font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-sm">
//                       {feedbacks.map((f) => (
//                         <tr key={f.id} className="border-t">
//                           <td className="px-3 py-2 text-gray-700">{f.id}</td>
//                           <td className="px-3 py-2 text-gray-900">{f.name}</td>
//                           <td className="px-3 py-2 text-gray-700">{f.message}</td>
//                           <td className="px-3 py-2 text-gray-900">{f.rating}</td>
//                           <td className="px-3 py-2 text-gray-700">{f.date}</td>
//                           <td className="px-3 py-2">
//                             <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${f.reviewed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
//                               {f.reviewed ? "Reviewed" : "New"}
//                             </span>
//                           </td>
//                           <td className="px-3 py-2">
//                             <div className="flex items-center gap-2">
//                               <button
//                                 onClick={() => setViewFeedback(f)}
//                                 className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 active:scale-95"
//                               >
//                                 <Eye size={14} />
//                                 View
//                               </button>
//                               <button
//                                 onClick={() => markReviewed(f.id)}
//                                 className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 active:scale-95"
//                               >
//                                 <CheckCircle2 size={14} />
//                                 {f.reviewed ? "Unmark" : "Reviewed"}
//                               </button>
//                               <button
//                                 onClick={() => deleteFeedback(f.id)}
//                                 className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 active:scale-95"
//                               >
//                                 <Trash2 size={14} />
//                                 Delete
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 {viewFeedback && (
//                   <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40">
//                     <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-lg">
//                       <div className="text-base font-semibold text-gray-900">{viewFeedback.name}</div>
//                       <div className="mt-1 text-sm text-gray-600">{viewFeedback.date}</div>
//                       <div className="mt-2 text-sm text-gray-700">{viewFeedback.message}</div>
//                       <div className="mt-4 flex items-center gap-3 justify-end">
//                         <button
//                           onClick={() => setViewFeedback(null)}
//                           className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 active:scale-95"
//                         >
//                           Close
//                         </button>
//                         <button
//                           onClick={() => {
//                             markReviewed(viewFeedback.id);
//                             setViewFeedback(null);
//                           }}
//                           className="rounded-lg bg-[#02192F] px-3 py-2 text-sm font-semibold text-white active:scale-95"
//                         >
//                           Mark Reviewed
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;



import React from "react";
import axios from "axios";
import {
  PlusSquare,
  MessageSquare,
  UserCog,
  Search,
  Trash2,
  Pencil,
} from "lucide-react";

// REAL feedback component (backend connected)
import AdminFeedbackList from "./AdminFeedbackList";

function Admin() {

  const [step, setStep] = React.useState(1);
  const [imageFile, setImageFile] = React.useState(null);

  const categories = [
    "Printing Services",
    "Marketing Materials",
    "Office Items",
    "Photo Frames",
    "Invitation & Cards",
    "Tickets & Event Cards",
    "Corporate ID Cards & Accessories",
    "Packaging Solution"
  ];

  const handleSubmitService = async () => {
    if (!imageFile || !form.name || !form.price || !form.category) {
      alert("All fields are required");
      return;
    }

    try {
      // 🔥 1️⃣ Upload image to Cloudinary (FRONTEND)
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "vt_printz_services");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drwh1zlgx/image/upload",
        data
      );

      const imageUrl = cloudRes.data.secure_url;

      // 🔥 2️⃣ Send service data to YOUR backend
      await axios.post("http://localhost:5000/api/services", {
        name: form.name,
        description: form.description,
        price: form.price,
        category: form.category,
        image: imageUrl,
      });

      alert("Service added successfully");

      // Reset form
      setForm({
        category: "",
        name: "",
        price: "",
        description: "",
      });
      setImageFile(null);

    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload service");
    }
  };


  const [active, setActive] = React.useState("serviceprovider");

  // ---------------- SERVICE PROVIDER STATES ----------------
  const [providerQuery, setProviderQuery] = React.useState("");
  const [providerLoading, setProviderLoading] = React.useState(false);
  const [providerError, setProviderError] = React.useState("");
  const [products, setProducts] = React.useState([]);

  // ---------------- ADD SERVICE STATES ----------------
  const [form, setForm] = React.useState({
    category: "",
    name: "",
    price: "",
    description: "",
  });
  const [services, setServices] = React.useState([]);
  const [editingId, setEditingId] = React.useState(null);
  const firstInputRef = React.useRef(null);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ---------------- PRODUCTS (OPTIONAL) ----------------
  const fetchProducts = async () => {
    setProviderLoading(true);
    setProviderError("");
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products?search=${encodeURIComponent(
          providerQuery
        )}`
      );
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch {
      setProviderError("Failed to load products");
    } finally {
      setProviderLoading(false);
    }
  };

  // Comment this if products API not ready
  // React.useEffect(() => {
  //   fetchProducts();
  // }, []);

  const fetchServices = async () => {
    setProviderLoading(true);
    setProviderError("");

    try {
      const res = await axios.get("http://localhost:5000/api/services");
      setServices(res.data);
    } catch (error) {
      setProviderError("Failed to load services");
    } finally {
      setProviderLoading(false);
    }
  };

  React.useEffect(() => {
    if (active === "serviceprovider") {
      fetchServices();
    }
  }, [active]);


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-12 gap-6 pt-24">
          {/* ---------------- SIDEBAR ---------------- */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-xl border bg-white shadow-sm">
              <div className="px-4 py-4 text-lg font-semibold">Admin</div>
              <nav className="border-t">
                <button
                  onClick={() => setActive("serviceprovider")}
                  className={`flex w-full items-center gap-3 px-4 py-3 ${active === "serviceprovider"
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                    }`}
                >
                  <UserCog size={18} /> Service Provider
                </button>

                <button
                  onClick={() => setActive("addservice")}
                  className={`flex w-full items-center gap-3 px-4 py-3 ${active === "addservice"
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                    }`}
                >
                  <PlusSquare size={18} /> Add Service
                </button>

                <button
                  onClick={() => setActive("feedback")}
                  className={`flex w-full items-center gap-3 px-4 py-3 ${active === "feedback"
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                    }`}
                >
                  <MessageSquare size={18} /> Feedback
                </button>
              </nav>
            </div>
          </aside>

          {/* ---------------- MAIN ---------------- */}
          <main className="col-span-12 lg:col-span-9">
            
            {active === "serviceprovider" && (
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <h2 className="font-semibold mb-4">Services</h2>

                {providerLoading && (
                  <p className="text-sm text-gray-500">Loading services...</p>
                )}

                {providerError && (
                  <p className="text-sm text-red-500">{providerError}</p>
                )}

                {!providerLoading && services.length === 0 && (
                  <p className="text-sm text-gray-500">No services found</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div
                      key={service._id}
                      className="border rounded-lg overflow-hidden shadow-sm"
                    >
                      <div
                        className="h-36 bg-gray-100"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />

                      <div className="p-3">
                        <h3 className="font-semibold text-sm">{service.name}</h3>
                        <p className="text-xs text-gray-600">{service.category}</p>
                        <p className="text-sm font-bold mt-1">₹{service.price}</p>

                        <div className="flex gap-2 mt-3">
                          <button className="flex items-center gap-1 text-xs border px-2 py-1 rounded">
                            <Pencil size={14} /> Edit
                          </button>
                          <button className="flex items-center gap-1 text-xs border px-2 py-1 rounded text-red-600">
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {active === "addservice" && (
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <h2 className="font-semibold mb-4">Add Service</h2>

                {/* STEP 1 – CATEGORY */}
                {step === 1 && (
                  <div>
                    <label className="block text-sm mb-2">Select Category</label>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className="border p-2 w-full rounded"
                    >
                      <option value="">-- Select Category --</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>

                    <button
                      disabled={!form.category}
                      onClick={() => setStep(2)}
                      className="mt-4 bg-[#02192F] text-white px-4 py-2 rounded"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* STEP 2 – SERVICE FORM */}
                {step === 2 && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Category: <b>{form.category}</b>
                    </p>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files[0])}
                      className="border p-2 w-full"
                    />

                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Service Name"
                      className="border p-2 w-full"
                    />

                    <input
                      name="price"
                      type="number"
                      value={form.price}
                      onChange={onChange}
                      placeholder="Price"
                      className="border p-2 w-full"
                    />

                    <textarea
                      name="description"
                      value={form.description}
                      onChange={onChange}
                      placeholder="Description"
                      className="border p-2 w-full"
                    />

                    <div className="flex gap-3">
                      <button
                        onClick={handleSubmitService}
                        className="bg-[#02192F] text-white px-4 py-2 rounded"
                      >
                        Save Service
                      </button>

                      <button
                        onClick={() => setStep(1)}
                        className="border px-4 py-2 rounded"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}


            {/* 🔥 REAL FEEDBACK SYSTEM */}
            {active === "feedback" && <AdminFeedbackList />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
