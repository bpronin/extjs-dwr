package com.bo;

import java.util.List;

/**
 * Class Users.
 *
 * @author Boris Pronin (<a href="mailto:bpronin@bttprime.com">bpronin@bttprime.com</a>)
 */
public class Users {

    private List<User> items;
    private int total;

    public Users() {
    }

    public Users(List<User> items, int total) {
        this.items = items;
        this.total = total;
    }

    public List<User> getItems() {
        return items;
    }

    public void setItems(List<User> items) {
        this.items = items;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "Users{" +
                "items=" + items +
                ", total=" + total +
                '}';
    }
}
