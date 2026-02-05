import React, { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_SECRET;

const STATUS_OPTIONS = ["pending", "reviewed", "replied"];

const AdminFeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [replyText, setReplyText] = useState("");

  // ---------------- FETCH ALL FEEDBACK ----------------
  useEffect(() => {
    fetch(`${API_URL}/api/feedback`, {
      headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setFeedbacks(data);
      })
      .catch(console.error);
  }, []);

  // ---------------- UPDATE STATUS ----------------
  const updateStatus = async (id, status) => {
    const res = await fetch(`${API_URL}/api/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
      body: JSON.stringify({ status }),
    });

    const updated = await res.json();

    if (!updated || !updated._id) return;

    setFeedbacks((prev) =>
      prev.map((f) =>
        f._id === id ? { ...f, ...updated } : f   // ✅ MERGE
      )
    );
  };

  // ---------------- SAVE / EDIT REPLY ----------------
  const saveReply = async (id) => {
    if (!replyText.trim()) return;

    const res = await fetch(`${API_URL}/api/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
      body: JSON.stringify({ adminReply: replyText }),
    });

    const updated = await res.json();

    if (!updated || !updated._id) return;

    setFeedbacks((prev) =>
      prev.map((f) =>
        f._id === id ? { ...f, ...updated } : f   // ✅ MERGE
      )
    );

    setActiveId(null);
    setReplyText("");
  };

  // ---------------- DELETE REPLY ----------------
  const deleteReply = async (id) => {
    const res = await fetch(`${API_URL}/api/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
      body: JSON.stringify({ deleteReply: true }),
    });

    const updated = await res.json();

    if (!updated || !updated._id) return;

    setFeedbacks((prev) =>
      prev.map((f) =>
        f._id === id ? { ...f, ...updated } : f   // ✅ MERGE
      )
    );
  };

  // ---------------- DELETE FEEDBACK ----------------
  const deleteFeedback = async (id) => {
    if (!window.confirm("Delete this feedback permanently?")) return;

    await fetch(`${API_URL}/api/feedback/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
    });

    setFeedbacks((prev) => prev.filter((f) => f._id !== id));
  };

  // ---------------- STATUS BADGE ----------------
  const StatusBadge = ({ status }) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700",
      reviewed: "bg-blue-100 text-blue-700",
      replied: "bg-green-100 text-green-700",
    };

    return (
      <span className={`px-2 py-1 rounded text-xs font-semibold ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Admin Feedback</h2>

      {feedbacks.length === 0 && (
        <p className="text-gray-500">No feedback found.</p>
      )}

      {feedbacks.map((fb) => (
        <div key={fb._id} className="border rounded p-4 mb-4 bg-white">
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              {fb.name}{" "}
              <span className="text-sm text-gray-500">({fb.email})</span>
            </p>
            <StatusBadge status={fb.status} />
          </div>

          <p className="mt-2">{fb.message}</p>

          {fb.adminReply && (
            <p className="mt-2 text-sm bg-gray-50 p-2 rounded">
              <b>Admin Reply:</b> {fb.adminReply}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <select
              value={fb.status}
              onChange={(e) => updateStatus(fb._id, e.target.value)}
              className="border px-2 py-1 rounded"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <button
              className="text-green-600"
              onClick={() => {
                setActiveId(fb._id);
                setReplyText(fb.adminReply || "");
              }}
            >
              {fb.adminReply ? "Edit Reply" : "Reply"}
            </button>

            {fb.adminReply && (
              <button
                className="text-orange-600"
                onClick={() => deleteReply(fb._id)}
              >
                Delete Reply
              </button>
            )}

            <button
              className="text-red-600"
              onClick={() => deleteFeedback(fb._id)}
            >
              Delete Feedback
            </button>
          </div>

          {activeId === fb._id && (
            <div className="mt-3">
              <textarea
                className="border w-full p-2 mb-2"
                rows="3"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />

              <div className="flex gap-3">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => saveReply(fb._id)}
                >
                  Save Reply
                </button>
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => setActiveId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminFeedbackList;
