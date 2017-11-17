package grocerylist.services;

import grocerylist.dataaccess.contracts.GroceryItemDataAccess;
import grocerylist.entities.GroceryItemEntity;
import grocerylist.enums.GroceryItemStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GroceryItemService {

    @Autowired
    GroceryItemDataAccess groceryItemDataAccess;

    public List<GroceryItemEntity> getAll() {
        return groceryItemDataAccess.findAll();
    }

    public GroceryItemEntity add(GroceryItemEntity entity) {
        if (groceryItemDataAccess.findByTitle(entity.getTitle()) != null) {
            return null;
        }

        entity.setStatus(GroceryItemStatus.NEW);
        return groceryItemDataAccess.saveOrUpdate(entity);
    }

    public boolean edit(GroceryItemEntity entity) {
        if (groceryItemDataAccess.findById(entity.getId()) == null) {
            return false;
        }

        GroceryItemEntity existingEntity = groceryItemDataAccess.findByTitle(entity.getTitle());
        if (existingEntity != null && existingEntity.getId() != entity.getId()) {
            return false;
        }

        if (entity.getStatus() == null) {
            return false;
        }
        groceryItemDataAccess.saveOrUpdate(entity);
        return true;
    }

    public boolean delete(long id) {
        if (groceryItemDataAccess.findById(id) == null) {
            return false;
        }
        groceryItemDataAccess.delete(id);
        return true;
    }
}
