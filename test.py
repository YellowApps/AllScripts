import turtle

p = turtle.Pen()

def draw_square(pen, size):
    for i in range(4):
        pen.forward(size)
        pen.left(90)

p.up()
p.backward(600)
p.down()

for i in range(6):
    draw_square(p, 100)
    p.up()
    p.forward(200)
    p.down()
