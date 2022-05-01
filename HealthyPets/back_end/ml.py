from tensorflow import keras
from tensorflow.keras.preprocessing import image
import numpy as np
import sys


model = keras.models.load_model("/Users/gracew/Downloads/InceptionNet (2).h5")
img_width, img_height = 299, 299
img = image.load_img(sys.argv[1], target_size = (img_width, img_height))
img = image.img_to_array(img)
img = np.expand_dims(img, axis = 0)
print(np.argmax(model.predict(img)[0]))


