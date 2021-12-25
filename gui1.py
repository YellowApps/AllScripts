from tkinter import *
from random import randint

def btn1_click():
    lbl1["text"] = randint(0, 1000000)

wnd = Tk()

lbl1 = Label(text="")
lbl1.pack()

btn1 = Button(text="test", command=btn1_click)
btn1.pack()

mainloop()
