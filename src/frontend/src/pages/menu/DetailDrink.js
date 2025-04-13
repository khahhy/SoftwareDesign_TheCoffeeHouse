import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import DrinkAPI from "services/drinkService";
import styles from "./DetailDrink.module.css";

function DrinkDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [drink, setDrink] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);

    useEffect(() => {
        const fetchDrink = async () => {
            try {
                const shopId = localStorage.getItem("nearestShopId");
                const res = await DrinkAPI.getDrinkById(shopId, id);
                setDrink(res.drink);
            } catch (err) {
                console.error("Lỗi tải chi tiết món uống", err);
            }
        };
        fetchDrink();
    }, [id]);

    const toggleTopping = (topping) => {
        setSelectedToppings((prev) =>
            prev.includes(topping)
                ? prev.filter((item) => item !== topping)
                : [...prev, topping]
        );
    };

    const calculateTotal = () => {
        let base = drink.price || 0;
        let sizePrice = selectedSize?.extraPrice || 0;
        let toppingsPrice = selectedToppings.reduce((sum, top) => sum + (top.price || 0), 0);
        return base + sizePrice + toppingsPrice;
    };

    if (!drink) return null;

    return (
        <div>
            <Header />

            <div className={styles.detailContainer}>
                <div className={styles.topSection}>
                    <div className={styles.left}>
                        <img src={drink.image} alt={drink.name} className={styles.image} />
                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.title}>{drink.name}</h2>
                        <p className={styles.price}>{drink.price.toLocaleString()} đ</p>

                        <div className={styles.section}>
                            <div className={styles.label}>Chọn size (bắt buộc)</div>
                            <div className={styles.options}>
                                {drink.sizes.map((size) => (
                                    <button
                                        key={size.size}
                                        className={`${styles.optionBtn} ${selectedSize?.size === size.size ? styles.selected : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size.size} + {size.extraPrice.toLocaleString()} đ
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.section}>
                            <div className={styles.label}>Topping</div>
                            <div className={styles.options}>
                                {drink.toppings.map((top) => (
                                    <button
                                        key={top._id}
                                        className={`${styles.optionBtn} ${selectedToppings.includes(top) ? styles.selected : ""}`}
                                        onClick={() => toggleTopping(top)}
                                    >
                                        {top.name} + {top.price.toLocaleString()} đ
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.totalPrice}>
                            Tổng cộng: {calculateTotal().toLocaleString()} đ
                        </div>

                        <button className={styles.addToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </div>

                <div className={styles.descSection}>
                    <h3>Mô tả sản phẩm</h3>
                    <p className={styles.description}>{drink.description}</p>
                </div>

                <div className={styles.relatedSection}>
                    <h3>Sản phẩm liên quan</h3>
                    <div className={styles.related}>
                        {drink.relatedDrinks.map((item) => (
                            <div
                                key={item._id}
                                className={styles.relatedItem}
                                onClick={() => window.location.href = `/drink/detail/${item._id}`}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={item.image} alt={item.name} />
                                <div className={styles.relatedItemTitle}>{item.name}</div>
                                <div>
                                    {typeof item.price === "number"
                                        ? `${item.price.toLocaleString()} đ`
                                        : "Giá không xác định"}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default DrinkDetailPage;
