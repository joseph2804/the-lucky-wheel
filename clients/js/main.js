
var matkhau = "mycode";
var solanquay = 5;
let luckyAngle = 22.5;
let listLuckyIndex = [
    {index: 1, percent: 900}, 
    {index: 2, percent: 700}, 
    {index: 5, percent: 800}, 
    {index: 8, percent: 200}, 
    {index: 6, percent: 50},
    {index: 3, percent: 500}, 
    {index: 4, percent: 600},
]; // edit here to specific lucky cell
let arrayLucky = []
let numberOfLuckyItem = 7; // count lucky item
let luckyIndex = 1
let stopAngle = 22.5 + 45;
listLuckyIndex.sort((x, y) => {
    if(x.percent > y.percent) {
        return 1
    }
    else return - 1
})
// console.log(listLuckyIndex)
for (let i = 0; i < listLuckyIndex.length; i++) {
    arrayLucky[i] = (luckyAngle + 45 * (listLuckyIndex[i].index - 1)) - 360;
}

let percent = Math.floor(Math.random() * 1000)
for (let i = 0; i < listLuckyIndex.length; i++) {
    if(percent <= listLuckyIndex[i].percent) {
        luckyIndex = listLuckyIndex[i].index
        break
    }
    if(percent > 900) {
        luckyIndex = 6
        break
    }
}
stopAngle = arrayLucky[luckyIndex]

// Sau khi load trang sẽ yêu cầu nhập mật khẩu
function nhappass() { }

function mopopup() {
    document.getElementById("caidat").style.display = "block";
}

function tatpopup() {
    document.getElementById("caidat").style.display = "none";
}

$(".buttontatpopup").hover(
    function () {
        $("#popup").attr("src", 'img/popup2.jpg');
    },
    function () {
        $("#popup").attr("src", 'img/popup.jpg');
    }
);
$(".buttonlammoi").hover(
    function () {
        $("#popup").attr("src", 'img/popup1.png');
    },
    function () {
        $("#popup").attr("src", 'img/popup.jpg');
    }
);
$(".buttonnhantien").hover(
    function () {
        $(".buttonnhantien").attr("src", 'img/nhantienhover.png');
    },
    function () {
        $(".buttonnhantien").attr("src", 'img/nhantien.png');
    }
);
$(".lammoipopupnhantien").hover(
    function () {
        $("#popuptien").attr("src", 'img/popupnhantienhover.png');
    },
    function () {
        $("#popuptien").attr("src", 'img/popupnhantien.png');
    }
);
let theWheel = new Winwheel({
    'outerRadius': 220, // Bán kính ngoài
    'innerRadius': 0, // Size lỗ trung tâm
    'textFontSize': 24, // Size chữ
    'textOrientation': 'horizontal', // Chữ nằm ngang
    'textAlignment': 'outer', // Căn chỉnh văn bản ra bên ngoài bánh xe.
    'numSegments': 8, // Số ô
    'responsive': true,
    'segments': [{
        'fillStyle': '#910f06',
        'text': '1.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 30,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#ab6f03',
        'text': '20.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 28,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#910f06',
        'text': '50.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 26,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#ab6f03',
        'text': '5.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 24,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#910f06',
        'text': '10.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 22,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#ab6f03',
        'text': '100.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 20,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#910f06',
        'text': '500.000 VNĐ',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 18,
        'textFillStyle': '#ffffff'
    }, {
        'fillStyle': '#ab6f03',
        'text': 'Ô mất lượt',
        'size': winwheelPercentToDegrees(12.5),
        'textFontSize': 16,
        'textFillStyle': '#ffffff'
    }],
    'animation': // Chỉ định hình động để sử dụng.
    {
        'type': 'spinToStop',
        'duration': 20, // Thời lượng tính bằng giây.
        'spins': 10, // Số vòng quay hoàn chỉnh mặc định.
        'callbackFinished': alertPrize,
        'callbackSound': playSound, // Chức năng gọi khi âm thanh đánh dấu được kích hoạt.
        'soundTrigger': 'pin', // Chỉ định các chân là để kích hoạt âm thanh, tùy chọn khác là 'phân đoạn'.
        'type': 'spinToStop',
        'duration': 6.4,
        'stopAngle': stopAngle,
    },
    'pins': {
        'number': 8, // Số lượng chân. Họ không gian đều xung quanh bánh xe.
        'responsive': true,
        'fillStyle': 'silver',
        'outerRadius': 4,
    }
});

// Vars được sử dụng bởi mã trong trang này để thực hiện các điều khiển nguồn.
let wheelPower = 13;
let wheelSpinning = false;
// ---------------------------------------------------------------------
// Tải âm thanh đánh dấu và chức năng phát được gọi khi pin đi qua con trỏ.
let audio = new Audio(
    'sound/tick.mp3'); // Tạo đối tượng âm thanh và tải tập tin tick.mp3.

var dem = 0;
var demnhantien = 0; // Đếm số lần click vào nút nhận tiền
var lichsulixi = "";
var tongtienlixi = 0;
var tiendalixi;
document.getElementById("xuatluotquay").innerHTML = solanquay;
var votay = document.getElementById("votay");
var matluot = document.getElementById("matluot");
var dangquay = document.getElementById("dangquay");

function playSound() {
    // Dừng và tua lại âm thanh nếu nó đã phát.
    audio.pause();
    audio.currentTime = 0;

    // Phát âm thanh.
    audio.play();
}

// -------------------------------------------------------
// Xử lý thanh range
// -------------------------------------------------------
function laypower() {
    wheelPower = document.getElementById("manhornhe").value; // Lấy dữ liệu thanh range
}

// -------------------------------------------------------
// Sau khi nhấp vào nút quay
// -------------------------------------------------------
function startSpin() {
    // Nút quay không nhấp được khi đang chạy
    if (wheelSpinning == false) {
        let percent = Math.floor(Math.random() * 1000)
        for (let i = 0; i < listLuckyIndex.length; i++) {
            if(percent <= listLuckyIndex[i].percent) {
                luckyIndex = i
                break
            }
            if(percent > 900) {
                luckyIndex = 6
                break
            }
        }
        stopAngle = arrayLucky[luckyIndex]
        console.log(percent, listLuckyIndex[luckyIndex].index)
        theWheel.animation.stopAngle = stopAngle
        // Dựa trên mức công suất được chọn, hãy điều chỉnh số vòng quay cho bánh xe, càng nhiều lần
        // để xoay với thời lượng của hình ảnh động thì bánh xe quay càng nhanh.
        theWheel.animation.spins = wheelPower;

        // Tắt nút xoay để không thể nhấp lại trong khi bánh xe đang quay.
        $(".nutbatdau").css("background-image", "url(img/controtat.png)");

        // Bắt đầu quay bằng cách gọi startAnimation.
        theWheel.startAnimation();

        // Đặt thành true để không thể thay đổi nguồn và bật nút quay lại trong khi
        // hình ảnh động hiện tại. Người dùng sẽ phải thiết lập lại trước khi quay lại.
        wheelSpinning = true;
    }
    if (dem < solanquay) {
        dangquay.play();
    }
}

// -------------------------------------------------------
// Sau khi nhấp vào nút làm mới
// -------------------------------------------------------
function lammoi() {
    tatpopup()
    document.getElementById("popupnhantien").style.display = "none"; // Tắt popup nhận tiền
    Swal.fire({
        title: "Làm mới vòng quay!",
        html: "<pre>Làm mới vòng quay sẽ xoá hết các vòng quay còn lại. \nLịch sử và tổng tiền lì xì vẫn giữ nguyên. \nChú ý nếu tải lại trang sẽ làm mất lịch sử và tổng tiền lì xì\nNhập mật khẩu để tiếp tục:</pre>",
        // type: "input",
        showCancelButton: true, // Có hiển thị nút cancel không(true = có)
        // closeOnConfirm: false, // Có thể tắt popup khi nhấp Ok không (true = có)
        // showLoaderOnConfirm: true, // Hiển thị loading khi nhấp vào nút Ok
        // animation: "slide-from-top", // Như tên của nó, popup sẽ slide from top
        // inputPlaceholder: "Nhập mật khẩu..."
    }).then(function (result) {
        if (result.isConfirmed) {
            setTimeout(function () {
                Swal.fire("Làm mới thành công!",
                    "Hãy đưa chiếc điện thoại cho người muốn nhận lì xì nào!", "success");

                theWheel.stopAnimation(false); // Dừng hình động
                theWheel.rotationAngle = 0; // Đặt lại góc bánh xe về 0 độ.
                theWheel.draw(); // Gọi draw để hiển thị các thay đổi cho bánh xe.

                $(".nutbatdau").css("background-image",
                    "url(img/contro.png)"); // Hiển thị lại nút Quay

                document.getElementById("xuatluotquay").innerHTML = solanquay;

                wheelSpinning =
                    false; // Đặt lại thành false thành các nút nguồn và quay có thể được bấm lại.
                document.getElementById("annhantien").style.display = "none"; // Ẩn nút nhận tiền
                document.getElementById("xuatsotien").src = ""; // Xoá ảnh tiền

                dem = 0;
            }, 2000)
        }
    })
}

// -------------------------------------------------------
// Sau khi vòng quay quay xong
// -------------------------------------------------------
function alertPrize(indicatedSegment) {
    dem++;
    tiendalixi = indicatedSegment.text.replace(".000 VNĐ", "");
    setTimeout(() => {
        if (dem < solanquay) { // Check xem đã hết lượt quay chưa
            theWheel.rotationAngle = 0; // Đặt lại góc bánh xe về 0 độ.
            theWheel.draw(); // Gọi draw để hiển thị các thay đổi cho bánh xe.
            wheelSpinning = false; // Đặt lại thành false thành các nút nguồn và quay có thể được bấm lại.

            $(".nutbatdau").css("background-image", "url(img/contro.png)"); // Hiển thị lại nút Quay
            document.getElementById("xuatluotquay").innerHTML = solanquay - dem; // Xuất kết quả


            if (indicatedSegment.text == 'Ô mất lượt') { // Nếu quay vào 0k
                matluot.play(); // Bật nhạc fail

                document.getElementById("annhantien").style.display = "none"; // Ẩn nút nhận tiền
                document.getElementById("xuatsotien").src = ""; // Xoá ảnh tiền

                Swal.fire({
                    icon: 'error',
                    html: "<pre>Bạn không nhận được đồng nào\nNhưng bạn còn lại " + (solanquay - dem) +
                        " lần quay, cố gắng lên nào!</pre>",
                    titleText: "Rất tiếc!"
                });
            } else { // Nếu không quay vào 0k
                votay.play(); // Bật nhạc vỗ tay

                document.getElementById("annhantien").style.display = ""; // Hiển thị nút nhận tiền
                document.getElementById("xuatsotien").src = "img/" + indicatedSegment.text.replace(
                    ".000 VNĐ", "") + "k.jpg"; // Xuất ảnh tiền

                Swal.fire({
                    icon: 'success',
                    html: "<pre>Bạn nhận được " + indicatedSegment.text + "\nBạn còn lại " + (solanquay -
                        dem) + " lần quay\nChú ý: Nếu quay tiếp bạn sẽ mất số tiền trước đó!</pre>",
                    titleText: "Tết ấm no!"
                });
            }
        } else { // Nếu hết lượt quay(dem = solanquay)
            document.getElementById("xuatluotquay").innerHTML = "0";
            $(".nutbatdau").css("background-image", "url(img/controhetluot.png)");

            if (indicatedSegment.text == 'Ô mất lượt') {
                matluot.play(); // Bật nhạc fail

                document.getElementById("annhantien").style.display = "none"; // Ẩn nút nhận tiền
                document.getElementById("xuatsotien").src = ""; // Xoá ảnh tiền

                Swal.fire({
                    icon: 'error',
                    text: "Bạn không nhận được đồng nào và số lượt quay đã hết!",
                    titleText: "Rất tiếc!"
                });
            } else {
                votay.play(); // Bật nhạc vỗ tay

                document.getElementById("annhantien").style.display = ""; // Hiển thị nút nhận tiền
                document.getElementById("xuatsotien").src = "img/" + indicatedSegment.text.replace(
                    ".000 VNĐ", "") + "k.jpg"; // Xuất ảnh tiền

                Swal.fire({
                    icon: 'success',
                    html: "<pre>Bạn nhận được " + indicatedSegment.text + "\nBạn đã hết lượt quay</pre>",
                    titleText: "Tết ấm no!"
                });
            }
        }
    }, 500);


}

// -------------------------------------------------------
// Sau khi nhấp vào nút nhận tiền
// -------------------------------------------------------
function nhantien() {
    document.getElementById("annhantien").style.display = "none"; // Ẩn nút nhận tiền
    document.getElementById("popupnhantien").style.display = "block"; // Mở popup
    document.getElementById("xuatsotienpopup").src = "img/" + tiendalixi + "kk.jpg";
    demnhantien++;
    tongtienlixi += Number(tiendalixi);
    document.getElementById("sotiendalixi").innerHTML = tongtienlixi + ".000 VNĐ";
    lichsulixi += "Người " + demnhantien + " : " + tiendalixi + ".000 VNĐ<br/>";
    document.getElementById("lichsulixi").innerHTML = lichsulixi;
}