def estimation(text,img_num):
    len_text = len(text)
    read_time = (len_text/1000) + img_num*0.2
    if read_time < 1:
        return 1
    return round(read_time)