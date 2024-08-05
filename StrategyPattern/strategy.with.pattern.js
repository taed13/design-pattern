/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VinFast
 * @param {*} originalPrice - giá sản phẩm
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}
/**
 * Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ: Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30k
 * @param {*} originalPrice - giá sản phẩm
 * @returns
 */
function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}
/**
 * Giá mặc định
 * @param {*} originalPrice - giá sản phẩm
 * @returns
 */
function defaultPrice(originalPrice) {
  return originalPrice;
}
/**
 * Black Friday promotion
 * @param {*} originalPrice - giá sản phẩm
 * @returns
 */
function blackFridayPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
}
/**
 * Giá mặc định
 * @param {*} originalPrice - giá sản phẩm
 * @returns
 */
function dayPrice(originalPrice) {
  return originalPrice * 0.6;
}

const getPriceStrategies = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  dayPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

console.log("Giá sản phẩm sau khi giảm giá: ", getPrice(100, "preOrder"));
