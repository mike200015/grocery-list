package grocerylist.dataaccess;

import grocerylist.dataaccess.contracts.GroceryItemDataAccess;
import grocerylist.entities.GroceryItemEntity;
import grocerylist.repositories.GroceryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GroceryItemDataAccessImpl implements GroceryItemDataAccess {

    @Autowired
    GroceryItemRepository groceryItemRepository;

    @Override
    public GroceryItemEntity findById(long id) {
        return groceryItemRepository.findOne(id);
    }

    @Override
    public GroceryItemEntity findByTitle(String title) {
        return groceryItemRepository.findByTitle(title);
    }

    @Override
    public List<GroceryItemEntity> findAll() {
        return groceryItemRepository.findAll(new Sort(new Sort.Order(Sort.Direction.ASC, "id")));
    }

    @Override
    public GroceryItemEntity saveOrUpdate(GroceryItemEntity entity) {
        return groceryItemRepository.save(entity);
    }

    @Override
    public void delete(GroceryItemEntity entity) {
        groceryItemRepository.delete(entity);
    }

    @Override
    public void delete(long id) {
        groceryItemRepository.delete(id);
    }
}
