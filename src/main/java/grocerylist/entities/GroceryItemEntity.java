package grocerylist.entities;

import grocerylist.enums.GroceryItemStatus;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;

@Entity
public class GroceryItemEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column
  private GroceryItemStatus status;

  @NotBlank
  @Length(max = 50)
  @Column(length = 50)
  private String title;

  @Length(max = 150)
  @Column(length = 150)
  private String notes;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public GroceryItemStatus getStatus() {
    return status;
  }

  public void setStatus(GroceryItemStatus status) {
    this.status = status;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String name) {
    this.title = name;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }
}
