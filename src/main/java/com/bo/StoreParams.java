package com.bo;

/**
 * Class StoreParams.
 *
 * @author Boris Pronin (<a href="mailto:bpronin@bttprime.com">bpronin@bttprime.com</a>)
 */
public class StoreParams {

    private int start;
    private int limit;
    private int page;

    public StoreParams() {
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    @Override
    public String toString() {
        return "StoreParams{" +
                "start=" + start +
                ", limit=" + limit +
                ", page=" + page +
                '}';
    }
}
