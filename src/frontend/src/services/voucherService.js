const BASE_URL = "http://localhost:5001/api";

// Dữ liệu dự phòng khi API lỗi
const fallbackData = {
    vouchers: [
        { 
            id: 1, 
            title: "Giảm 10% Đơn từ 2 Món", 
            icon: "https://minio.thecoffeehouse.com/image/admin/1698765322_cp-pick-up.jpg", 
            expiresIn: "5 ngày" 
        },
        { 
            id: 2, 
            title: "Giảm 30K Đơn từ 99K", 
            icon: "https://minio.thecoffeehouse.com/image/admin/1698765397_coupon-30k.jpg", 
            expiresIn: "5 ngày" 
        },
        { 
            id: 3, 
            title: "Giảm 30% + Freeship Đơn Từ 5 Ly", 
            icon: "https://minio.thecoffeehouse.com/image/admin/1709222265_deli-copy-7.jpg", 
            expiresIn: "5 ngày" 
        },
        { 
            id: 4, 
            title: "Giảm 20K cho đơn từ 60K", 
            icon: "https://minio.thecoffeehouse.com/image/admin/1698765382_coupon-20k.jpg", 
            expiresIn: "5 ngày" 
        },
        { 
            id: 5, 
            title: "Giảm 50% phí giao hàng", 
            icon: "https://minio.thecoffeehouse.com/image/admin/1735634161_coupon.jpg", 
            expiresIn: "5 ngày" 
        }
    ]
};

const VoucherAPI = {
    // Lấy danh sách voucher
    getVouchers: async () => {
        try {
            const response = await fetch(`${BASE_URL}/voucher/list`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.warn("API failed: getVouchers, using fallback data.");
                return fallbackData.vouchers; // Trả về dữ liệu dự phòng
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching vouchers:", error.message);
            return fallbackData.vouchers; // Trả về dữ liệu dự phòng nếu lỗi
        }
    },

    // Lấy chi tiết voucher theo ID
    getVoucherById: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/voucher/detail?id=${id}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.warn("API failed: getVoucherById, using fallback data.");
                return fallbackData.vouchers.find(v => v.id === id) || null;
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching voucher details:", error.message);
            return fallbackData.vouchers.find(v => v.id === id) || null;
        }
    }
};

export default VoucherAPI;
