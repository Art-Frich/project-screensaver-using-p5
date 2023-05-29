# project-screensaver
### [Ссылка на проект](https://art-frich.github.io/project-screensaver/)
### Описание 
Заставка для экрана с эффектом полёта сквозь звёзды. Отлично укачивает.
### Дополнительная инфомрация
[Сделано на основе статьи журнала "Код"](https://thecode.media/3d-stars/)


## Сложности
Как много вопросов в настолько маленьком проекте =) 

Так и не смог найти оптимального диапазона глубины генерации. Оставил как в статье.
Хотел сделать динамическую генерацию цветов звезд, но ввиду огромного количества итераций при отрисовке, возникла необходимость в замедлении смены цветов, что несколько усложнило затею. 

Для более...разнотипной генерации звезд (время их появления, цвета, особенно на старте странички, когда они генерируются все разом) думал установить таймер, но он замедлит отрисовку и появятся фризы. Пришел к выводу, что надо подключать многопоточность, а это когда-нибудь потом...

Не особо понял как работает второй аргумент параметра background. Вроде как отвечает за прозрачность фона, что явно показывет значение "0", но как оно работает при значениях больше нуля - не очень понятно. В документации явного ответа также не нашел. Возможно плохо искал.

В коде применен диапазон генерации по x,y вдвое шире необходимого, но это позволяет иметь более естественную катинку на старте странички. Видимо из-за разброса... Не очень понимаю, но когда сделал 1:1 стало визуально хуже.

P.S. надо бы проверить. Я не до конца понял, как именно робит эффект выпадения звезд за экран. Диапазон map от нуля и до ширины экрана, а числа отрицательные. Ну это примерно понятно, не понял связан ли с этим диапазон разброса... не могу сформулировать. В общем, пара идей: дело в масштабе, дело в map, дело в их совокупности.

Т.е. оно масштабируется из-за масштаба вдвое больше начального, поэтому чаще всего спроецированная координата за экраном, поэтому туда и улетает?


