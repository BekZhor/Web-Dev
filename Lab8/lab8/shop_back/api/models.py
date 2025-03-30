from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255,unique=True)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id": self.id,
            "category": self.name
        }
    

class Products(models.Model):
    name = models.CharField(max_length=500)
    price = models.IntegerField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category,on_delete=models.CASCADE, related_name="products",to_field="name")

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"{self.id} {self.name}, {self.price}, {self.description}, {self.count}, {self.is_active}"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "desctiption": self.description,
            "count": self.count,
            "is_active": self.is_active
        }

