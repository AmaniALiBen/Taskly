
const ordersData = [
    {
        id: 1,
        title: "Professional Tech Logo Design",
        seller: { name: "Ahmed M.", avatar: "https://i.pravatar.cc/100?u=9" },
        dueDate: "Apr 25, 2026",
        status: "In Progress",
        statusCode: "active",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400"
    },
    {
        id: 2,
        title: "Responsive Landing Page Build",
        seller: { name: "Sara Ali", avatar: "https://i.pravatar.cc/100?u=5" },
        dueDate: "Apr 28, 2026",
        status: "Awaiting Info",
        statusCode: "warning",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400"
    },
    {
        id: 3,
        title: "10 Social Media Copy Posts",
        seller: { name: "Khaled M.", avatar: "https://i.pravatar.cc/100?u=12" },
        dueDate: "Apr 23, 2026",
        status: "Delivered",
        statusCode: "completed",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400"
    }
];

function renderOrders(filter = 'active') {
    const listElement = document.getElementById('orders-list');
    listElement.innerHTML = '';

    const filtered = ordersData.filter(order => {
        if (filter === 'active') return order.statusCode === 'active' || order.statusCode === 'warning';
        return order.statusCode === filter;
    });

    filtered.forEach(order => {
        const badgeClass = order.statusCode === 'active' ? 'status-active' :
            order.statusCode === 'completed' ? 'status-completed' : 'status-warning';

        const cardHtml = `
                    <a href="order_tracking.html?id=${order.id}" class="order-card">
                        <div class="order-img-container">
                            <img src="${order.image}" class="order-img">
                        </div>
                        <div class="order-details-flex">
                            <div class="order-main-info">
                                <h3>${order.title}</h3>
                                <div class="seller">
                                    <img src="${order.seller.avatar}"> <span>${order.seller.name}</span>
                                </div>
                            </div>
                            <div class="order-meta-group">
                                <div class="meta-item">
                                    <span class="label">Due Date</span>
                                    <span class="value">${order.dueDate}</span>
                                </div>
                                <div class="status-badge ${badgeClass}">
                                    ${order.status}
                                </div>
                            </div>
                        </div>
                    </a>
                `;
        listElement.innerHTML += cardHtml;
    });
}

function filterOrders(type) {
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText.toLowerCase() === type) tab.classList.add('active');
    });
    renderOrders(type);
}

window.onload = () => renderOrders('active');
