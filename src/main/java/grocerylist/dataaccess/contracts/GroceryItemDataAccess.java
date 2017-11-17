package grocerylist.dataaccess.contracts;

import grocerylist.entities.GroceryItemEntity;

import java.util.List;

public interface GroceryItemDataAccess {
    GroceryItemEntity findById(long id);
    GroceryItemEntity findByTitle(String title);
    List<GroceryItemEntity> findAll();
    GroceryItemEntity saveOrUpdate(GroceryItemEntity entity);
    void delete(GroceryItemEntity entity);
    void delete(long id);
}
