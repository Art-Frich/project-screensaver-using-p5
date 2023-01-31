# project-screensaver

Очень просто, а потому корявенько.
Во всяком случае меня укачало.

(Сделано на основе статьи журнала "Код")[https://thecode.media/3d-stars/]

## Сложности

Так и не смог найти оптимального диапазона глубины генерации. Оставил как в статье.
Хотел сделать динамическую генерацию цветов звезд, но ввиду огромного количества итераций при отрисовке, возникла необходимость в замедлении смены цветов, что несколько усложнило затею. Условно говоря, нужно сначала замерить приблизительное количество итераций в секунду, а затем установить желаемую скорость смены цветов. 

Для более...разнотипной генерации звезд (время их появления, цвета, особенно на старте странички, когда они генерируются все разом) думал установить таймер, но он замедлит отрисовку и появятся фризы. Пришел к выводу, что надо подключать многопоточность, а это когда-нибудь потом...

Не особо понял как работает второй аргумент параметра background. Вроде как отвечает за прозрачность фона, что явно показывет значение "0", но как оно работает при значениях больше нуля - не очень понятно. В документации явного ответа также не нашел. Возможно плохо искал.

В коде применен диапазон генерации по x,y вдвое шире необходимого, но это позволяет иметь более естественную катинку на старте странички. Видимо из-за разброса... Не очень понимаю, но когда сделал 1:1 стало визуально хуже.
