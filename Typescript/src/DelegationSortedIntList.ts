import { SortedIntList } from './hidden/SortedIntListLibrary.js'
import { IntegerList } from './IntegerList.js'

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
class DelegationSortedIntList implements IntegerList {
  private totalAdded: number = 0
  private sortedIntList: SortedIntList = new SortedIntList()

  /**
   * Adds the specified int to the list and counts the attempt.
   *
   * @param num an integer to be added to the list
   * @return true if the list is changed as a result of the call
   */
  public add(num: number): boolean {
    this.totalAdded++

    return this.sortedIntList.add(num)
  }

  /**
   * Adds all of the elements of the IntegerList to the list.
   *
   * @param list IntegerList containing elements to be added to the list
   * @return true if the list changed as a result of the call
   */
  public addAll(list: IntegerList): boolean {
    this.totalAdded += list.size()

    return this.sortedIntList.addAll(list)
  }

  /**
   * Returns the integer at the specified position in this list.
   *
   * @param index index of the element to return
   * @return the element at the specified position in this list
   */
  public get(index: number): number {
    return this.sortedIntList.get(index)
  }

  /**
   * Removes the first occurrence of the specified element from the list,
   * if it is present (optional operation).
   *
   * @param num an integer to be removed from the list, if present
   * @return true if an element was removed as a result of this call
   */
  public remove(num: number): boolean {
    return this.sortedIntList.remove(num)
  }

  /**
   * Removes from the list all of its elements that are contained in the
   * specified IntegerList.
   *
   * @param list IntegerList containing elements to be removed from
   * the list
   * @return true if the list changed as a result of the call
   */
  public removeAll(list: IntegerList): boolean {
    return this.sortedIntList.removeAll(list)
  }

  /**
   * Returns the number of elements in this list. If this list contains
   * more than Integer.MAX_VALUE elements, returns Integer.MAX_VALUE.
   *
   * @return number of elements in the list
   */
  public size(): number {
    return this.sortedIntList.size()
  }

  /**
   * Returns the total number of attempts to add elements to the list.
   *
   * @return the total number of attempts to add elements to the list
   */
  public getTotalAdded(): number {
    return this.totalAdded
  }

  // Write your implementation below with API documentatioin
}

export { DelegationSortedIntList }
