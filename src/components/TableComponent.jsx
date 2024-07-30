import React from 'react'
import useState from 'react'
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { createTheme as createMaterialTheme } from "@mui/material/styles";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { usePagination } from "@table-library/react-table-library/pagination";

// ComposedTable component
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';

// Sort library
import {
  useSort,
  HeaderCellSort,
  SortIconPositions,
  SortToggleType,
} from "@table-library/react-table-library/sort";

// Default theme and baseline
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline"; 

import nodes from '/src/nodes.json'; // nodes can be read no problem

const key = 'Composed Table';
const resize = { resizerHighlight: "#dde2eb" };

const TableComponent = () => {
  const theme = useTheme(getTheme());
  const data = { nodes }

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        id:       (array) => array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
        location: (array) => array.sort((a, b) => a.location.localeCompare(b.location)),
        barangay: (array) => array.sort((a, b) => a.barangay.localeCompare(b.barangay)),
        locality: (array) => array.sort((a, b) => a.locality.localeCompare(b.locality)),
        province: (array) => array.sort((a, b) => a.province.localeCompare(b.province)),
        region:   (array) => array.sort((a, b) => a.region.localeCompare(b.region)),
        site_type:(array) => array.sort((a, b) => a.site_type.localeCompare(b.site_type)),
        lat:      (array) => array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
        long:     (array) => array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const getIcon = (sortKey) => {
    if (sort.state.sortKey === sortKey && sort.state.reverse) {
      return <KeyboardArrowDownOutlinedIcon />;
    }

    if (sort.state.sortKey === sortKey && !sort.state.reverse) {
      return <KeyboardArrowUpOutlinedIcon />;
    }

    return <UnfoldMoreOutlinedIcon />;
  };

  return (
    <MaterialThemeProvider theme={createMaterialTheme({})}>
      <Table data={data} sort={sort} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow> 
                {/* ID */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("id")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'id',
                      })
                    }
                  >
                    ID
                  </Button>
                </HeaderCell>
                {/* LOCATION */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("location")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'location',
                      })
                    }
                  >
                    LOCATION
                  </Button>
                </HeaderCell>
                {/* BARANGAY */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("barangay")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'barangay',
                      })
                    }
                  >
                    Barangay
                  </Button>
                </HeaderCell>
                {/* LOCALITY */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("locality")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'locality',
                      })
                    }
                  >
                    Locality
                  </Button>
                </HeaderCell>
                {/* PROVINCE */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("province")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'province',
                      })
                    }
                  >
                    Province
                  </Button>
                </HeaderCell>
                {/* REGION */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("region")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'region',
                      })
                    }
                  >
                    Region
                  </Button>
                </HeaderCell>
                {/* SITE TYPE */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("site_type")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'site_type',
                      })
                    }
                  >
                    Site Type
                  </Button>
                </HeaderCell>
                {/* LAT */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("lat")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'long',
                      })
                    }
                  >
                    LONG
                  </Button>
                </HeaderCell>
                {/* LONG */}
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{justifyContent: "flex-start"}}
                    endIcon={getIcon("long")}
                    onClick={() => 
                      sort.fns.onToggleSort({
                        sortKey: 'long',
                      })
                    }
                  >
                    Long
                  </Button>
                </HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.id}</Cell>
                  <Cell>{item.location}</Cell>
                  <Cell>{item.barangay}</Cell>
                  <Cell>{item.locality}</Cell>
                  <Cell>{item.province}</Cell>
                  <Cell>{item.region}</Cell>
                  <Cell>{item.site_type}</Cell>
                  <Cell>{item.lat}</Cell>
                  <Cell>{item.long}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </MaterialThemeProvider>
  );

};
   

export default TableComponent



