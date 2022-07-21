var headerElement = document.querySelector('#header');
        const menuMobileBtn = document.querySelector('.ic-mobile-menu');
        // Gán giá trị height ban đầu cho biến isClosed
        var headerHeight = headerElement.clientHeight;
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

        menuMobileBtn.onclick = function () {
            // So sánh height lúc click vào với height ban đầu
            var isClosed = headerElement.clientHeight === headerHeight;
            if (isClosed) {
                headerElement.style.height = 'auto';
            } else {
                headerElement.style.height = null;
            }
        }

        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            menuItem.onclick = function (event) {
                // nextElementSibling được hiểu là cái element đó có anh chị em liền kề nào không
                // menuItems.nextElementSibling.classList.contains('subnav');
                // được hiểu là cái anh chị em liền kề đó, kiểm tra xem thẻ cha của họ có phải là
                // có class là subnav không
                // this ở đây được hiểu là cái thẻ mà chúng ta click vào
                var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                // Kiểm tra nếu thẻ cha của anh chị em liền kề, nếu có thì không ẩn menu mobile đi
                // ngược lại thì ẩn menu mobile
                if (isParent) {
                    // preventDefault(): nghĩa là ngăn chặn hành vi mặc định của cái element đó
                    // trong bài này, chúng ta đã set hành vi mặc định khi click vào thẻ a là đóng
                    // đi cái menu trên mobile, nhưng khi click vào thẻ a là more thì không đóng
                    // đi menu mà là sẽ hiện lên cái menu con (subnav)
                    // hiện menu con sẽ đi css
                    event.preventDefault();
                } else {
                    headerElement.style.height = null;
                }
            }
        }