package grocerylist.repositories;

import grocerylist.entities.GroceryItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface GroceryItemRepository extends JpaRepository<GroceryItemEntity, Long> {
    GroceryItemEntity findByTitle(String title);
}
