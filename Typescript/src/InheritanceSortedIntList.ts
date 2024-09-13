import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import { IntegerList } from './IntegerList.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
class InheritanceSortedIntList extends SortedIntList {
  private totalAdded: number = 0

  /**
   * Adds the specified int to the list and counts the attempt.
   *
   * @param num an integer to be added to the list
   * @return true if the list is changed as a result of the call
   */
  public add(num: number): boolean {
    this.totalAdded++
    console.log(this.totalAdded)
    return super.add(num)
  }

  /**
   * Returns the total number of attempts to add elements to the list.
   *
   * @return the total number of attempts to add elements to the list
   */
  public getTotalAdded(): number {
    return this.totalAdded
  }
}

export { InheritanceSortedIntList }
