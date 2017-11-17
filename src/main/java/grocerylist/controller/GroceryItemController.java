package grocerylist.controller;

import grocerylist.entities.GroceryItemEntity;
import grocerylist.services.GroceryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/groceryitems")
@RestController
@CrossOrigin
public class GroceryItemController {

    @Autowired
    GroceryItemService groceryItemService;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<GroceryItemEntity> getAll() {
        return groceryItemService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST, path = "/add")
    public @ResponseBody GroceryItemEntity add(@Valid @RequestBody GroceryItemEntity entity) {
        return groceryItemService.add(entity);
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/edit")
    public @ResponseBody boolean edit(@Valid @RequestBody GroceryItemEntity entity) {
        return groceryItemService.edit(entity);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/delete/{id}")
    public @ResponseBody boolean delete(@PathVariable("id") long id) {

        return groceryItemService.delete(id);
    }
}
